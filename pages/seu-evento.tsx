import { useRouter } from 'next/router'
import React from 'react'
import { useAsync, useAsyncCallback } from 'react-async-hook'
import SpotifyClient from '../client/spotify-client'

export default function seuEvento () {
  const router = useRouter()
  const client = new SpotifyClient()

  const accessToken = useAsyncCallback(() => client.getUserAccessToken(router.query.code as string))

  const result = useAsync(() => client.getUserTopArtists(accessToken.result?.access_token || ''), [accessToken.status === 'success'])
  const user = useAsync(() => client.getCurrentUserProfile(accessToken.result?.access_token || ''), [accessToken.status === 'success'])

  return (
    <>
      {result?.status !== 'success' && (
        <button onClick={() => accessToken.execute()}>
          Gerar evento
        </button>
      )}
      <ul>
        {result?.status === 'success' && (
          <>
            <h1>Seu evento!</h1>
            {user.result?.display_name}
            <img src={user.result?.images[0].url || ''} />
            {result.result?.items.map((item, index) => {
              return (
                <li key={item.id}>
                  {index + 1} {item.name}
                  <img src={item.images[0].url} />
                </li>
              )
            })}
          </>
        )}
      </ul>
    </>
  )
}
