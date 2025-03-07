import { lazy } from 'react'
import { Container } from '@/components/container'

const QuestionList = lazy(() =>
  import('@/components/question/QuestionList').then((module) => ({ default: module.QuestionList }))
)
const AddQuestion = lazy(() =>
  import('@/components/question/AddQuestion').then((module) => ({ default: module.AddQuestion }))
)

export default function Questions() {
  return (    
      <Container leftAdornment={<AddQuestion />} title="سوالات">
        <QuestionList />
      </Container>
  )
}
