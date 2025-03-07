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
  const colorPale = rootStyles.getPropertyValue('--color-pale').trim()
  const colorDark = rootStyles.getPropertyValue('--color-dark').trim()

  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        palette: {
          success: {
            main: colorGreen || '#199DA3',
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

          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: colorPale,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: colorPale,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: colorPale,
                },
                fontSize: '12px',
              },
              input: {
                fontSize: '12px',
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                fontSize: '12px',
                color: colorPale,
                '&.Mui-focused': {
                  color: colorDark,
                },
              },
            },
          },
        },
      }),
    [colorGreen, colorGreenHover, colorGreenLight, colorWhite, colorPale, colorDark]
  )

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
