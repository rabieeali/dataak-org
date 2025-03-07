const queryKeys = {
  questionsList: 'question-list',
  addQuestion: 'add-question',
  questionById: 'question-by-id',
  answersList: 'answers-list',
  addAnswer: 'add-answer',
  emote: 'emote',
}
const endpoints = { questions: '/questions', answers: '/answers' }
const routes = { homepage: '/', questions: '/questions', answers: '/answers' }
const urlParams = { page: 'page' }

export { endpoints, routes, urlParams, queryKeys }
