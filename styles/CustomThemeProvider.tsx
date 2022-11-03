import React, { ReactNode } from 'react'
import { themeOptions } from './theme-options'
import { ptBR } from '@mui/material/locale'
import { createTheme, ThemeProvider } from '@mui/material'

type CustomThemeProviderProps = {
  children: ReactNode
}

export default function CustomThemeProvider (props: CustomThemeProviderProps) {
  const theme = createTheme(themeOptions, ptBR)

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
