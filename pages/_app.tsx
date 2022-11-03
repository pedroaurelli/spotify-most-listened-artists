import React from 'react'
import type { AppProps } from 'next/app'
import CustomThemeProvider from '../styles'
import CssBaseline from '@mui/material/CssBaseline'
import PageLayout from '../react/components/PageLayout'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <CssBaseline />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </CustomThemeProvider>
    </>
  )
}

export default MyApp
