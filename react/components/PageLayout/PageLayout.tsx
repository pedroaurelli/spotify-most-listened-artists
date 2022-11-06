import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

export type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout (props: PageLayoutProps) {
  return (
    <Box mx='16px' sx={{ overflow: 'hidden' }}>
      {props.children}
    </Box>
  )
}
