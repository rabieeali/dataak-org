import { useMutation } from '@tanstack/react-query'
import { endpoints, queryKeys } from '@/constant/variables'
import { axios } from '@/config/axios'
import { queryClient } from '@/config/tanstack-query'
import { AnswerEngagementBody } from '@/types/dto'

export const useAnswerEngagementMutation = () => {
  const fetcher = async (emote: AnswerEngagementBody) => {
    const { data: answer } = await axios.get(`${endpoints.answers}/${emote.id}`)

    const updatedField = {
      likes: emote.mode === 'like' ? String(+answer.likes + 1) : answer.likes,
      dislikes: emote.mode === 'dislike' ? String(+answer.dislikes + 1) : answer.dislikes,
    }
    const { data } = await axios.patch(`${endpoints.answers}/${emote.id}`, updatedField)
    return data
  }

  return useMutation({
    mutationFn: fetcher,
    mutationKey: [queryKeys.emote],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.answersList] })
    },
  })
}
