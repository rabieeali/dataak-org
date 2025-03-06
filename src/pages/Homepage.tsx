import { Button, Box } from '@mui/material'
import { routes } from '@/constant/variables'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button color="success" variant="contained">
        <Link style={{ color: 'var(--color-white)' }} to={routes.questions}>
          مشاهده سوالات
        </Link>
      </Button>
    </Box>
  )
}
