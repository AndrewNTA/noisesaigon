'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import theme from '@/lib/theme'

export function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
} 