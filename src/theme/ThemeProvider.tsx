import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const rootStyles = getComputedStyle(document.documentElement)
  const colorWhite = rootStyles.getPropertyValue('--color-white').trim()
  const colorGreen = rootStyles.getPropertyValue('--color-green').trim()
  const colorGreenHover = rootStyles.getPropertyValue('--color-green-hover').trim()
  const colorGreenLight = rootStyles.getPropertyValue('--color-green-light').trim()

  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        palette: {
          success: {
            main: colorGreen || '#199DA3', // Fallback in case CSS variable is undefined
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              containedSuccess: {
                backgroundColor: colorGreen,
                '&:hover': {
                  backgroundColor: colorGreenHover,
                },
              },
            },
          },
          MuiPaginationItem: {
            styleOverrides: {
              outlined: {
                borderColor: colorGreen,
                color: colorGreen,
                '&.Mui-selected': {
                  backgroundColor: colorGreen,
                  color: colorWhite,
                  '&:hover': {
                    backgroundColor: colorGreenHover,
                  },
                },
                '&:hover': {
                  backgroundColor: colorGreenLight,
                },
              },
              text: {
                color: colorGreen,
                '&.Mui-selected': {
                  backgroundColor: colorGreen,
                  color: colorWhite,
                  '&:hover': {
                    backgroundColor: colorGreenHover,
                  },
                },
                '&:hover': {
                  backgroundColor: colorGreenLight,
                },
              },
            },
          },
        },
      }),
    [colorGreen, colorGreenHover, colorGreenLight, colorWhite]
  )

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
