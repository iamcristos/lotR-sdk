import { Base } from '../base'
import { Query } from '../base/types'
import { Response } from './types'
export class Movie extends Base {
  ListMovies(query?: Query, filter?: object): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to ListMovies')
    }
    const endpointUrl = this.GetEndPointUrl(query, filter)
    return this.request(`/movie?${endpointUrl}`)
  }

  GetAMovieQuote(id: string, query?: Query, filter?: object): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAMovieQuote')
    }
    const endpointUrl = this.GetEndPointUrl(query, filter)
    return this.request(`/movie/${id}/quote?${endpointUrl}`)
  }

  GetAMovie(id: string): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAMovie')
    }
    return this.request(`/movie/${id}`)
  }
}
