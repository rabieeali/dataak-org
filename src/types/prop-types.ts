import { ReactNode } from 'react'

type QuestionListProps = {
  currentPage: string
}

interface ContainerProps {
  children: ReactNode
  title: string
  leftAdornment?: ReactNode
}

export type { QuestionListProps, ContainerProps }
