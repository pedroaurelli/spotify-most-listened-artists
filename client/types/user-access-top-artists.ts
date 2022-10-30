import { TopArtistsItemResult } from './top-artists-item-result'

export type UserAccessTopArtists = {
  href: string
  items: TopArtistsItemResult[]
  limit: number
  next: string | null
  offset: number | null
  previous: string | null
  total: number | null
}
