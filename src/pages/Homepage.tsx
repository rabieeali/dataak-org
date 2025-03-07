// import { Button, Box } from '@mui/material'
import Button from '@mui/material/Button'
import  Box from '@mui/material/Box'
import { routes } from '@/constant/variables'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link style={{ color: 'var(--color-white)' }} to={routes.questions}>
        <Button color="success" variant="contained">
          مشاهده سوالات
        </Button>
      </Link>
    </Box>
  )
}
