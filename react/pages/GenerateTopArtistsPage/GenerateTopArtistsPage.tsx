import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useAsyncCallback } from 'react-async-hook'
import SpotifyClient from '../../../client/spotify-client'
import SpotifyIcon from '../../icons/SpotifyIcon'

export default function GenerateTopArtistsPage () {
  const router = useRouter()
  const client = new SpotifyClient()

  const accessToken = useAsyncCallback(() => client.getUserTopArtists(router.query.code as string))

  return (
    <>
      {accessToken.status !== 'success' && (
        <Button
          variant='outlined'
          startIcon={<SpotifyIcon color='#1DB954' />}
          onClick={() => accessToken.execute()}
        >
          Descubra seu top 20!
        </Button>
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
    </>
  )
}
