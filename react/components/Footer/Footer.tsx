import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

type socialMediasRecordType = {
  href: string
  icon: ReactNode
}

const socialMediasRecord: socialMediasRecordType[] = [
  {
    href: 'https://www.instagram.com/pedroaurelli/',
    icon: <InstagramIcon sx={{ height: '50px', width: '50px' }}/>
  },
  {
    href: 'https://github.com/pedroaurelli',
    icon: <GitHubIcon sx={{ height: '50px', width: '50px' }}/>
  },
  {
    href: 'https://www.linkedin.com/in/pedro-aureliano/',
    icon: <LinkedInIcon sx={{ height: '50px', width: '50px' }}/>
  }
]

export default function Footer () {
  return (
    <Box>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        spacing='8px'
      >
        {socialMediasRecord.map((item, index) => (
          <IconButton
            key={index}
            sx={{ height: 'auto', width: 'auto', color: '#6b6b6b' }}
            href={item.href}
            target='_blank'
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>
      <Typography
        fontWeight='300'
        color='#6b6b6b'
        sx={{ whiteSpace: 'nowrap' }}
        textAlign='center'
      >
        Developed by Pedro Aureliano
      </Typography>
    </Box>
  )
}
