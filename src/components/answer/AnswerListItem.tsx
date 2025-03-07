import { Box, Card, CardContent, Typography, Divider, Button } from '@mui/material'
import { Person } from '@/components/common/Person'
import { AnswerListItemProps } from '@/types/prop-types'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { useAnswerEngagementMutation } from '@/hooks/answer'

export const AnswerListItem = ({ id, date, dislikes, likes, text, time, username }: AnswerListItemProps) => {
  const { mutate } = useAnswerEngagementMutation()

  const handleLike = () => mutate({ id, mode: 'like' })
  const handleDislike = () => mutate({ id, mode: 'dislike' })

  return (
    <Card variant="outlined" sx={{ boxShadow: 1, borderRadius: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.25rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Person />
          <Typography variant="body2" className="IRANSansBold">
            {username}
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
      </CardContent>
      <Divider />
      {/* Footer Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box display="flex" alignItems="center" gap={1} color="text.secondary">
          <Box sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SentimentSatisfiedAltIcon fontSize="small" /> {likes}
          </Box>
          <Box sx={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SentimentVeryDissatisfiedIcon fontSize="small" /> {dislikes}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            startIcon={<SentimentSatisfiedAltIcon fontSize="small" />}
            color="success"
            variant="outlined"
            size="small"
            onClick={handleLike}
          >
            پاسخ خوب
          </Button>
          <Button
            startIcon={<SentimentVeryDissatisfiedIcon fontSize="small" />}
            color="error"
            variant="outlined"
            size="small"
            onClick={handleDislike}
          >
            پاسخ بد
          </Button>
        </Box>
      </Box>
    </Card>
  )
}
