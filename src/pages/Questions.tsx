import { Container } from '@/components/container'
import { QuestionList } from '@/components/question/QuestionList'
import { AddQuestion } from '@/components/question/AddQuestion'

export default function Questions() {
  return (
    <Container leftAdornment={<AddQuestion />} title="سوالات">
      <QuestionList />
    </Container>
  )
}
