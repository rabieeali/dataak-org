import { Button, Box } from '@mui/material'
import { routes } from '@/constant/variables'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained">
        <Link to={routes.questions}>مشاهده سوالات</Link>
      </Button>
    </Box>
  )
}
