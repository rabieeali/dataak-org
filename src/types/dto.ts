type QuestionType = {
  id: string
  title: string
  text: string
  answersCount: string
  time: string
  date: string
}

type QuestionListResponse = {
  data: QuestionType[]
  first: number
  items: number
  last: number
  next: number
  pages: number
  prev: number
}

type AddQuestionBody = {
  title: string
  text: string
}

export type { QuestionType, QuestionListResponse, AddQuestionBody }
