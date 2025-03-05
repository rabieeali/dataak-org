import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = createTheme({
    direction: 'rtl',
  })

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
