import { ChangeEvent, Fragment } from 'react'
import { urlParams } from '@/constant/variables'
import { useSearchParams } from 'react-router-dom'
import { useQuestionListQuery } from '@/hooks'
import { Box, Pagination, PaginationItem } from '@mui/material'
import { QuestionListItem } from './QuestionListItem'
import { useNavigate } from 'react-router-dom'
import { routes } from '@/constant/variables'
import CircularProgress from '@mui/material/CircularProgress'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const QuestionList = () => {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get(urlParams.page) || '1'
  const navigate = useNavigate()
  const { data: questionList, isLoading } = useQuestionListQuery(currentPage)

  const allPages = questionList?.pages

  const handleChange = (event: ChangeEvent<unknown>, p: number) => {
    navigate(`${routes.questions}?page=${p}`)
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <CircularProgress color="inherit" />
      </Box>
    )
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {questionList?.data.map((q) => (
          <Fragment key={q.id}>
            <QuestionListItem
              answersCount={q.answersCount}
              date={q.date}
              id={q.id}
              text={q.text}
              time={q.time}
              title={q.title}
            />
          </Fragment>
        ))}
      </Box>

      <Box sx={{ marginBlock: '1rem', display: 'flex', justifyContent: 'right' }}>
        <Pagination
          page={+currentPage}
          onChange={handleChange}
          count={allPages}
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </Box>
    </>
  )
}
