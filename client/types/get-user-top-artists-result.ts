import { SpotifyCurrentUserResult } from './spotify-current-user-result'
import { UserAccessTopArtists } from './user-access-top-artists'

export type getUserTopArtistsResult = {
  user: SpotifyCurrentUserResult
  topArtists: UserAccessTopArtists
}
