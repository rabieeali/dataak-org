import { useAddAnswerMutation } from '@/hooks/answer'
import { AnswerFormProps } from '@/types/prop-types'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { FormEvent, useEffect, useState } from 'react'

export const AnswerForm = ({ questionId }: AnswerFormProps) => {
  const [answer, setAnswer] = useState('')
  const { mutate, isPending, isSuccess } = useAddAnswerMutation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutate({ answer, questionId })
  }

  useEffect(() => {
    if (isSuccess) {
      setAnswer('')
    }
  }, [isSuccess])

  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <TextField
        name="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        fullWidth
        multiline
        rows={4}
        size="small"
        label="پاسخ دهید"
        placeholder="متن پاسخ خود را بنویسید"
        variant="outlined"
        sx={{ marginTop: 2 }}
      />
      <Button
        type="submit"
        disabled={!answer.trim().length}
        startIcon={isPending && <CircularProgress size={16} color="inherit" />}
        color="success"
        variant="contained"
        size="small"
        sx={{ float: 'right', marginBlock: '0.5rem' }}
      >
        ارسال پاسخ
      </Button>
    </Box>
  )
}
