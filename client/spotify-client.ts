import axios, { AxiosInstance } from 'axios'
import { getUserTopArtistsResult } from './types/get-user-top-artists-result'

export default class SpotifyClient {
  private spotifyAccount: AxiosInstance
  private spotifyApi: AxiosInstance

  constructor () {

    this.spotifyAccount = axios.create({
      baseURL: 'https://accounts.spotify.com',
      headers: {
        'Authorization': `Basic ${process.env.NEXT_PUBLIC_SPOTIFY_ENCODE_BASE64_CODE}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    this.spotifyApi = axios.create({
      baseURL: 'https://api.spotify.com',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getUserTopArtists (queryCode: string): Promise<getUserTopArtistsResult | void> {
    return (await this.spotifyAccount.post('/api/token',
      {
        'grant_type': 'authorization_code',
        'code': `${queryCode}`,
        'redirect_uri': `${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}`
      }
    )
      .then(async (response) => {
        const getArtists = await this.spotifyApi.get('/v1/me/top/artists', {
          params: {
            'time_range': 'short_term'
          },
          headers: {
            Authorization: `Bearer ${response.data.access_token}`
          }
        })

        const getCurrentUserProfile = await this.spotifyApi.get('/v1/me',{
          headers: {
            Authorization: `Bearer ${response.data.access_token}`
          }
        })

        const result: getUserTopArtistsResult = {
          user: getCurrentUserProfile.data,
          topArtists: getArtists.data
        }

        return result
      })
      .catch(error => {
        throw error
      })
    )
  }
}
