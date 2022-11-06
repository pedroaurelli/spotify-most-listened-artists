import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { getUserTopArtistsResult } from '../../../client/types/get-user-top-artists-result'
import SpotifyIcon from '../../icons/SpotifyIcon'

export type ArtistsLayoutProps = {
  data: getUserTopArtistsResult
}

export default function ArtistsLayout (props: ArtistsLayoutProps) {
  const data = props.data

  return (
    <Stack
      sx={{
        width: '650px',
        height: '100%',
        scale: { xs: '0.5', sm: '0.7', md: '1' }
      }}
    >
      <Grid
        container
        columns={5}
      >
        {data.topArtists.items.map(item => (
          <Grid key={item.id} xs={1}>
            <Box
              sx={{
                width: '130px',
                height: '150px',
                position: 'relative'
              }}
            >
              <Image
                loader={() => item.images[0].url}
                src={item.images[0].url}
                alt={item.name}
                layout='fill'
                objectFit='cover'
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: 'secondary.dark',
          p: '16px'
        }}
      >
        <Stack direction='row' alignItems='center'>
          <Stack direction='column'>
            <Typography variant='h4' component='h1' color='primary'>
                Mais escutados no mês por {data.user.display_name}
            </Typography>
            <Typography variant='body1' color='#383838'>
                pedroaurelli-spotify-project.vercel.app
            </Typography>
          </Stack>
          <Box flexGrow={1} />
          <SpotifyIcon color='#1DB954' size='50px' />
        </Stack>
      </Box>
    </Stack>
  )
}
