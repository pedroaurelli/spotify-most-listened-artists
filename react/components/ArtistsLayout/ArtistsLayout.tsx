import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { getUserTopArtistsResult } from '../../../client/types/get-user-top-artists-result'

export type ArtistsLayoutProps = {
  data: getUserTopArtistsResult
}

export default function ArtistsLayout (props: ArtistsLayoutProps) {
  const data = props.data

  return (
    <Box
      sx={{
        width: '700px',
        height: '100%',
        borderRadius: '16px',
        paddingBottom: '0px'
      }}
    >
      <Grid
        container
        columns={5}
      >
        {data.topArtists.items.map(item => (
          <Grid key={item.id} xs={1}>
            <Box
              component='img'
              src={item.images[0].url}
              alt={item.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: 'secondary.dark',
          p: '16px'
        }}
      >
        <Typography variant='h1' color='primary'>
          {data.user.display_name}
        </Typography>
        <Typography variant='body1' color='#383838'>
          pedroaurelli-spotify-project.vercel.app
        </Typography>
      </Box>
    </Box>
  )
}
