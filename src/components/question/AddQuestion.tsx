import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { AddForm } from '@/components/question/AddForm'

export const AddQuestion = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button color="success" startIcon={<AddIcon />} size="small" variant="contained" onClick={handleOpen}>
        سوال جدید
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-basic">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className="IRANSansBold" id="modal-modal-title" variant="caption" component="h2">
              سوال جدید
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider sx={{ margin: '0.15rem 0 1rem' }} />
          <AddForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  )
}
