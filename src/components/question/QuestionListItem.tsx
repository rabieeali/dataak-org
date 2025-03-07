import { Box, Card, CardContent, Typography, Divider, Button } from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import { Person } from '@/components/common/Person'
import { Link } from 'react-router-dom'
import { routes } from '@/constant/variables'
import { QuestionListItemProps } from '@/types/prop-types'

export const QuestionListItem = ({
  shouldShowDetails,
  id,
  answersCount,
  date,
  text,
  time,
  title,
}: QuestionListItemProps) => {
  return (
    <Card variant="outlined" sx={{ boxShadow: 1, borderRadius: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.25rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Person />
          <Typography variant="body2" className="IRANSansBold">
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingRight: '0.5rem' }}>
          <Typography variant="caption" color="text.secondary">
            ساعت: <span style={{ color: '#000' }}>{time}</span>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="caption" color="text.secondary">
            تاریخ: <span style={{ color: '#000' }}>{date}</span>
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Content Section */}
      <CardContent>
        <Typography variant="caption">{text}</Typography>
        {/* <Typography variant="caption" dangerouslySetInnerHTML={{ __html: text }} /> */}
      </CardContent>
      <Divider />
      {/* Footer Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box display="flex" alignItems="center" gap={1} color="text.secondary">
          <QuestionAnswerIcon fontSize="small" />

          <Typography variant="caption">تعداد پاسخ‌ها: {answersCount}</Typography>
        </Box>
        {shouldShowDetails && (
          <Button color="success" variant="outlined" size="small">
            <Link style={{ color: 'var(--color-green)' }} to={`${routes.answers}/${id}`}>
              مشاهده جزئیات
            </Link>
          </Button>
        )}
      </Box>
    </Card>
  )
}
