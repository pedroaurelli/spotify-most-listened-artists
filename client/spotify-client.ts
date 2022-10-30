import axios, { AxiosInstance } from 'axios'
import { UserAccessTokenResult } from './types/user-access-token-result'
import { UserAccessTopArtists } from './types/user-access-top-artists'

export default class SpotifyClient {
  private spotifyAccount: AxiosInstance
  private spotifyApi: AxiosInstance
  private authorizationCode: string

  constructor () {
    this.authorizationCode = process.env.SPOTIFY_ENCODE_BASE64_CODE || '/'

    this.spotifyAccount = axios.create({
      baseURL: 'https://accounts.spotify.com',
      headers: {
        'Authorization': 'Basic M2I1ODhiZWIxNDUyNGE4NmIzNzhiYjI0ZTlkZjNiNmY6MDU1NDBjMTI5YzBlNDNjYjg0ZDhkY2JhMGFjMjZlMzI=',
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
        'redirect_uri': 'http://localhost:3000/seu-evento'
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
}
