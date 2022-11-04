import React from 'react'

import { useRouter } from 'next/router'
import { useAsync } from 'react-async-hook'
import { CircularProgress, Grid } from '@mui/material'

import SpotifyClient from '../../../client/spotify-client'
import ArtistsLayout from '../../components/ArtistsLayout'
import UnauthorizedAccess from '../../components/UnauthorizedAccess'

export default function GenerateTopArtistsPage () {
  const router = useRouter()
  const client = new SpotifyClient()

  const userTopArtists = useAsync(async () => await client.getUserTopArtists(router.query.code as string), [router.isReady])

  return (
    <Grid container sx={{ height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Grid item>
        <>
          {userTopArtists.loading && (
            <CircularProgress color='primary' />
          )}
          {userTopArtists.result && (
            <ArtistsLayout data={userTopArtists.result} />
          )}
          {userTopArtists.error && <UnauthorizedAccess />}
        </>
      </Grid>
    </Grid>
  )
}
