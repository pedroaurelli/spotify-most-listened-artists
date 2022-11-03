import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import SpotifyIcon from '../../icons/SpotifyIcon'

export default function HomePage () {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&scope=user-top-read`

  return (
    <Grid container sx={{ height: '100vh', alignItems: 'center', textAlign: 'center' }}>
      <Grid item xs>
        <Typography
          variant='h3'
          sx={{ textDecoration: 'none', color: '#fff' }}
          mb={{ xs: '50px', md: '80px' }}
        >
          {'Quais '}
          <Typography component='a' variant='h3' color='primary'>artistas</Typography>
          {' você mais ouviu no mês?'}
        </Typography>
        <Button
          variant='contained'
          startIcon={<SpotifyIcon />}
          href={authUrl}
        >
         Faça já o seu
        </Button>
      </Grid>
    </Grid>
  )
}

