import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from '@/constant/variables'
import { lazy, Suspense } from 'react'

const Homepage = lazy(() => import('@/pages/Homepage'))
const Questions = lazy(() => import('@/pages/Questions'))
const Answers = lazy(() => import('@/pages/Answers'))

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
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App
