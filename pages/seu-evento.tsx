import { useRouter } from 'next/router'
import React from 'react'
import { useAsync } from 'react-async-hook'
import SpotifyClient from '../client/spotify-client'

export default function seuEvento () {
  const router = useRouter()
  const client = new SpotifyClient()

  const accessToken = useAsync(() => client.getUserAccessToken(`${router.query.code}`), [ router.isReady ])

  const result = useAsync(() => client.getUserTopArtists(accessToken.result?.access_token || ''), [ accessToken.result ])

  return (
    <>
      <h1>Seu evento!</h1>
      <ul>
        {result.result?.items.map((item, index) => {
          return (
            <li key={item.id}>
              {index + 1} {item.name}
              <img src={item.images[0].url} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
