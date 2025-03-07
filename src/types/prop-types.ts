import { ReactNode } from 'react'

type QuestionListProps = {
  currentPage: string
}

interface ContainerProps {
  children: ReactNode
  title: string
  leftAdornment?: ReactNode
}

interface QuestionListItemProps {
  shouldShowDetails?: boolean
  id: string
  title: string
  text: string
  answersCount: string
  time: string
  date: string
}

interface AnswerListItemProps {
  questionId: string
  id: string
  text: string
  time: string
  date: string
  likes: string
  dislikes: string
  username: string
}
interface AnswerFormProps {
  questionId: string
}

export type { QuestionListProps, ContainerProps, QuestionListItemProps, AnswerListItemProps, AnswerFormProps }
