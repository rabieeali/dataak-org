import { Box, CircularProgress } from '@mui/material'

export const Progress = () => {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center' }}>
      <CircularProgress color="inherit" />
    </Box>
  )
}
