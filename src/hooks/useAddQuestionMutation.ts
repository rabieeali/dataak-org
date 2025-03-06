import { useMutation } from '@tanstack/react-query'
import { endpoints, queryKeys } from '@/constant/variables'
import { axios } from '@/config/axios'
import { queryClient } from '@/config/tanstack-query'
import { nanoid } from 'nanoid'
import type { AddQuestionBody } from '@/types/dto'

export const useAddQuestionMutation = () => {
  const fetcher = async (newQuestion: AddQuestionBody) => {
    //? note: this is fake data,it should be done by the server
    const toSend = {
      id: nanoid(),
      title: newQuestion.title,
      text: newQuestion.text,
      answersCount: '13',
      time: '16:48',
      date: '1400/2/15',
    }
    const { data } = await axios.post(endpoints.questions, toSend)
    return data
  }
  return useMutation({
    mutationFn: fetcher,
    mutationKey: [queryKeys.addQuestion],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.questionsList] })
    },
  })
}
