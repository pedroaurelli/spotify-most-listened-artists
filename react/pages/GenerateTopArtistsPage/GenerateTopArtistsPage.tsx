import { LinearProgress, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useAsync } from 'react-async-hook'
import SpotifyClient from '../../../client/spotify-client'
import UnauthorizedAccess from '../../components/UnauthorizedAccess'

export default function GenerateTopArtistsPage () {
  const router = useRouter()
  const client = new SpotifyClient()

  const accessToken = useAsync(async () => await client.getUserTopArtists(router.query.code as string), [router.isReady])

  return (
    <>
      {accessToken.loading && (
        <LinearProgress
          color='primary'
        />
      )}
      <Typography variant='h1' color='primary'>
        {accessToken.result?.user.display_name}
      </Typography>
      <ul>
        {accessToken.result?.topArtists.items.map(artist => (
          <li key={artist.id} style={{ color: '#fff' }}>
            {artist.name}
          </li>
        ))}
      </ul>
      {accessToken.error && <UnauthorizedAccess />}
    </>
  )
}
