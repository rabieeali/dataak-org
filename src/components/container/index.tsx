import { AppBar, Toolbar, Typography, Box, Divider } from '@mui/material'
import { Logo } from '@/components/common/Logo'
import { ContainerProps } from '@/types/prop-types'

export const Container = ({ children, title, leftAdornment }: ContainerProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Header */}
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            {leftAdornment}
            {leftAdornment && <Divider orientation="vertical" flexItem />}
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" px={2}>
        {children}
      </Box>
    </Box>
  )
}
