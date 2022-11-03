import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Footer () {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '50px'
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing='8px'
      >
        <IconButton
          sx={{ height: '64px', width: '64px', color: '#B8B8B8' }}
          href='https://github.com/pedroaurelli'
          target='_blank'
        >
          <GitHubIcon sx={{ height: '50px', width: '50px' }}/>
        </IconButton>
        <IconButton
          sx={{ height: '64px', width: '64px', color: '#B8B8B8' }}
          href='https://www.linkedin.com/in/pedro-aureliano/'
          target='_blank'
        >
          <LinkedInIcon sx={{ height: '50px', width: '50px' }}/>
        </IconButton>
      </Stack>
      <Typography fontWeight='300' color='#B8B8B8'>
        Development by Pedro Aureliano
      </Typography>
    </Box>
  )
}
