import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Answers, Homepage, Questions } from '@/pages'
import { routes } from '@/constant/variables'

const { homepage, questions, answers } = routes
const router = createBrowserRouter([
  {
    path: homepage,
    element: <Homepage />,
  },
  {
    path: questions,
    element: <Questions />,
  },
  {
    path: `${answers}/:id`,
    element: <Answers />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
