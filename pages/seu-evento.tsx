import { useRouter } from 'next/router'
import React from 'react'
import { useAsync } from 'react-async-hook'
import SpotifyClient from '../client/spotify-client'

export default function seuEvento () {
  const router = useRouter()

  console.log(router.query.code)

  const client = new SpotifyClient()

  const accessToken = useAsync(() => client.getUserAccessToken(`${router.query.code}`), [ router.query ])

  const result = useAsync(() => client.getUserTopArtists(accessToken.result?.access_token || ''), [ accessToken.result ])

  console.log(result.result)

  return (
    <>
      <h1>Seu evento!</h1>
      <p>Access token: {accessToken.result?.access_token}</p>
      <ul>
        {result.result?.items.map(item => {
          return (
            <li key={item.id}>
              {item.name}
              <img src={item.images[0].url} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
