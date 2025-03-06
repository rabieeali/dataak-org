import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useAddQuestionMutation } from '@/hooks'
import Box from '@mui/material/Box'

interface Props {
  handleClose: () => void
}
export const AddForm = ({ handleClose }: Props) => {
  const { mutate, isPending } = useAddQuestionMutation()

  const [formValues, setFormValues] = useState({ title: '', text: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((pre) => ({ ...pre, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutate(formValues)
  }

  useEffect(() => {
    if (isPending) {
      setFormValues({ title: '', text: '' })
      handleClose()
    }
  }, [isPending, handleClose])

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 2 }}>
        <TextField
          name="title"
          value={formValues.title}
          onChange={handleChange}
          fullWidth
          size="small"
          label="عنوان سوال"
          placeholder="برای سوال خود عنوان مشخص کنید"
        />

        <TextField
          name="text"
          value={formValues.text}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          size="small"
          label="متن سوال"
          placeholder="متن سوال خود را بنویسید"
          variant="outlined"
          sx={{ marginTop: 2 }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2, marginTop: 2 }}>
        <Button variant="text" color="success" size="small" onClick={handleClose}>
          انصراف
        </Button>
        <Button
          startIcon={isPending && <CircularProgress size={16} color="inherit" />}
          disabled={!formValues.title || !formValues.text}
          type="submit"
          variant="contained"
          color="success"
          size="small"
        >
          ایجاد سوال
        </Button>
      </Box>
    </Box>
  )
}
