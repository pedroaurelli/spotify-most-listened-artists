import axios, { AxiosInstance } from 'axios'
import { SpotifyCurrentUserResult } from './types/spotify-current-user-result'
import { UserAccessTokenResult } from './types/user-access-token-result'
import { UserAccessTopArtists } from './types/user-access-top-artists'

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
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  async getUserAccessToken (queryCode: string): Promise<UserAccessTokenResult> {
    return (await this.spotifyAccount.post('/api/token',
      {
        'grant_type': 'authorization_code',
        'code': `${queryCode}`,
        'redirect_uri': `${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}`
      }
    )).data
  }

  async getUserTopArtists (accessToken: string): Promise<UserAccessTopArtists> {
    return (await this.spotifyApi.get('/v1/me/top/artists',{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })).data
  }

  async getCurrentUserProfile (accessToken: string): Promise<SpotifyCurrentUserResult> {
    return (await this.spotifyApi.get('/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })).data
  }
}
