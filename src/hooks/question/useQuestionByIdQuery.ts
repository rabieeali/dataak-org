import type { QuestionType } from '@/types/dto'
import { endpoints, queryKeys } from '@/constant/variables'
import { useQuery } from '@tanstack/react-query'
import { axios } from '@/config/axios'

export const useQuestionByIdQuery = (id: string) => {
  const fetcher = async () => {
    const { data } = await axios.get(`${endpoints.questions}/${id}`)
    return data
  }

  const query = useQuery<QuestionType>({
    queryFn: fetcher,
    queryKey: [queryKeys.questionById, 'id', id],
  })

  return query
}
