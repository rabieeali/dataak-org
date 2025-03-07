import { AnswerListResponse } from '@/types/dto'
import { endpoints, queryKeys } from '@/constant/variables'
import { useQuery } from '@tanstack/react-query'
import { axios } from '@/config/axios'

export const useAnswerListQuery = (id: string, page: string) => {
  const fetcher = async () => {
    const { data } = await axios.get(`${endpoints.answers}?questionId=${id}&_page=${page}&_per_page=5`)
    return data
  }

  const query = useQuery<AnswerListResponse>({
    queryFn: fetcher,
    queryKey: [queryKeys.answersList, 'page', page],
  })

  return query
}
