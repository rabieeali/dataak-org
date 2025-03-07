import { useMutation } from '@tanstack/react-query'
import { endpoints, queryKeys } from '@/constant/variables'
import { axios } from '@/config/axios'
import { queryClient } from '@/config/tanstack-query'
import { nanoid } from 'nanoid'
import { AddAnswerBody } from '@/types/dto'
import { getPersianDate, getPersianTime } from '@/lib/persian-helper'

export const useAddAnswerMutation = () => {
  const fetcher = async (newAnswer: AddAnswerBody) => {
    //? note: this is fake data,it should be done by the server
    const toSend = {
      questionId: newAnswer.questionId,
      id: nanoid(),
      text: newAnswer.answer,
      time: getPersianTime(),
      date: getPersianDate(),
      likes: '0',
      dislikes: '0',
      username: 'حسین مهرابی',
    }
    const { data } = await axios.post(endpoints.answers, toSend)

    // Step 2: Fetch the current question to get the latest answersCount
    const { data: question } = await axios.get(`${endpoints.questions}/${newAnswer.questionId}`)

    // Step 3: Update the answersCount field
    await axios.patch(`${endpoints.questions}/${newAnswer.questionId}`, {
      answersCount: String(Number(question.answersCount) + 1),
    })

    return data
  }
  return useMutation({
    mutationFn: fetcher,
    mutationKey: [queryKeys.addAnswer],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.answersList] })
      queryClient.invalidateQueries({ queryKey: [queryKeys.questionsList] })
      queryClient.invalidateQueries({ queryKey: [queryKeys.questionById] })
    },
  })
}
