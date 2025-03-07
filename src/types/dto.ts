type QuestionType = {
  id: string
  title: string
  text: string
  answersCount: string
  time: string
  date: string
}

type AnswerType = {
  questionId: string
  id: string
  text: string
  time: string
  date: string
  likes: string
  dislikes: string
  username: string
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

type AnswerListResponse = {
  data: AnswerType[]
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

type AddAnswerBody = {
  questionId: string
  answer: string
}

type AnswerEngagementBody = {
  id: string
  mode: 'like' | 'dislike'
}

export type {
  QuestionType,
  QuestionListResponse,
  AddQuestionBody,
  AnswerType,
  AnswerListResponse,
  AddAnswerBody,
  AnswerEngagementBody,
}
