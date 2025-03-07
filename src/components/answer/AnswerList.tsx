import { routes, urlParams } from '@/constant/variables'
import { useAnswerListQuery } from '@/hooks/answer'
import { Box, CircularProgress, Pagination, PaginationItem } from '@mui/material'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnswerListItem } from './AnswerListItem'
import { ChangeEvent, Fragment } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const AnswerList = () => {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get(urlParams.page) || '1'
  const { data: answerList, isLoading } = useAnswerListQuery(id!, currentPage)

  const allPages = answerList?.pages

  const handleChange = (_event: ChangeEvent<unknown>, p: number) => {
    navigate(`${routes.answers}/${id}?page=${p}`)
  }

  if (isLoading || !answerList) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <CircularProgress color="inherit" />
      </Box>
    )
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {answerList.data.map((a) => (
          <Fragment key={a.id}>
            <AnswerListItem
              date={a.date}
              dislikes={a.dislikes}
              id={a.id}
              likes={a.likes}
              questionId={a.questionId}
              text={a.text}
              time={a.time}
              username={a.username}
            />
          </Fragment>
        ))}
      </Box>

      {answerList.data.length > 0 && (
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
      )}
    </>
  )
}
