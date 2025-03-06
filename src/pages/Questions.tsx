import { Container } from '@/components/container'
import { urlParams } from '@/constant/variables'
import { useSearchParams } from 'react-router-dom'
import { QuestionList } from '@/components/question/QuestionList'
import { AddQuestion } from '@/components/question/AddQuestion'

export default function Questions() {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get(urlParams.page) || '1'

  return (
    <Container leftAdornment={<AddQuestion />} title="سوالات">
      <QuestionList currentPage={currentPage} />
    </Container>
  )
}
