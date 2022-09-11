import { Base } from '../base'
import { Query } from '../base/types'
import { Response } from './types'
export class Movie extends Base {
  ListMovies(query?: Query): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to ListMovies')
    }
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/movie?${endpointUrl}`)
  }

  GetAMovieQuote(id: string, query?: Query): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAMovieQuote')
    }
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/movie/${id}/quote?${endpointUrl}`)
  }

  GetAMovie(id: string): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAMovie')
    }
    return this.request(`/movie/${id}`)
  }
}
