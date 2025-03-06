import { QuestionListResponse } from '@/types/dto'
import { endpoints, queryKeys } from '@/constant/variables'
import { useQuery } from '@tanstack/react-query'
import { axios } from '@/config/axios'

export const useQuestionListQuery = (page: string) => {
  const fetcher = async () => {
    const { data } = await axios.get(`${endpoints.questions}?_page=${page}&_per_page=5`)
    return data
  }

  const query = useQuery<QuestionListResponse>({
    queryFn: fetcher,
    queryKey: [`${queryKeys.questionsList}__page__${page}`],
  })

  return query
}
