export type TopArtistsItemResult = {
  external_urls: any
  followers: {
    href: string | null
    total: number | null
  }
  genres: string[]
  href: string
  id: string
  images: {
    height: number
    url: string
    width: string
  }[]
  name: string
  popularity: number
  type: string
  uri: string
}
