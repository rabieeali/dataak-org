import { ReactNode } from 'react'
import { AppBar, Toolbar, Typography, Box, Divider } from '@mui/material'
import { Logo } from '@/components/common/Logo'

interface Props {
  children: ReactNode
  title: string
  leftAdornment?: ReactNode
}

export const Container = ({ children, title, leftAdornment }: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Logo />
            {leftAdornment && <Divider orientation="vertical" flexItem />}
            {leftAdornment}
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
