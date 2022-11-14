import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { getUserTopArtistsResult } from '../../../client/types/get-user-top-artists-result'
import SpotifyIcon from '../../icons/SpotifyIcon'

export type ArtistsResultCard = {
  data: getUserTopArtistsResult
  id: string
}

export default function ArtistsResultCard (props: ArtistsResultCard) {
  const data = props.data

  return (
    <Stack
      id={props.id}
      sx={{
        width: '660px',
        height: { xs: '600px', sm: 'auto' },
        mt: '60px',
        scale: { xs: '0.5', sm: '0.7', md: '1'}
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
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              src={item.images[0].url}
              alt={item.name}
              component='img'
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: 'secondary.dark',
          p: '16px',
          borderRadius: '0px 0px 25px 25px'
        }}
      >
        <Stack direction='row' alignItems='center'>
          <Stack direction='column'>
            <Typography variant='h4' component='h1' color='primary'>
                  Mais escutados no mês por {data.user.display_name}
            </Typography>
            <Typography variant='body1' color='#5c5c5c'>
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
