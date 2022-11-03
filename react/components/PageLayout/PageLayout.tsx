import { Container } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from '../Footer'

export type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout (props: PageLayoutProps) {
  return (
    <>
      <Container maxWidth='lg'>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}
