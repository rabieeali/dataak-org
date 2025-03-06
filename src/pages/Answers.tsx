import { Container } from '@/components/container'
import { QuestionListItem } from '@/components/question/QuestionListItem'
import { useQuestionByIdQuery } from '@/hooks'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function Answers() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuestionByIdQuery(id!)

  if (isLoading || !data) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <CircularProgress color="inherit" />
      </Box>
    )
  }

  return (
    <Container title="سوال">
      <Box component={'section'}>
        <Typography variant="body2" className="IRANSansBold" my={2}>
          سوال
        </Typography>
        <QuestionListItem
          answersCount={data?.answersCount}
          date={data?.date}
          id={data?.id}
          text={data?.text}
          time={data?.time}
          title={data?.title}
        />
      </Box>
      <Box component={'section'}></Box>
    </Container>
  )
}
