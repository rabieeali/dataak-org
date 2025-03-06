import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'
import { CircularProgress, Divider, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAddQuestionMutation } from '@/hooks'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid var(--color-green-light)',
  boxShadow: 24,
  p: 1,
  borderRadius: '5px',
}

export const AddQuestion = () => {
  const { mutate, isPending } = useAddQuestionMutation()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
  }, [isPending])

  return (
    <div>
      <Button color="success" startIcon={<AddIcon />} size="small" variant="contained" onClick={handleOpen}>
        سوال جدید
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className="IRANSansBold" id="modal-modal-title" variant="caption" component="h2">
              سوال جدید
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider sx={{ margin: '5px 0 14px' }} />
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
        </Box>
      </Modal>
    </div>
  )
}
