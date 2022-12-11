import React from 'react'
import type { AppProps } from 'next/app'
import CustomThemeProvider from '../react/components/CustomThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import PageLayout from '../react/components/PageLayout'
import '../styles/style.css'

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
