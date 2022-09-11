import { Query } from '../base/types'
export interface Response {
  docs: Doc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
}

export interface Doc {
  _id: string
  name: string
  runtimeInMinutes: number
  budgetInMillions: number
  boxOfficeRevenueInMillions: number
  academyAwardNominations: number
  academyAwardWins: number
  rottenTomatoesScore: number
}

export interface IMovie {
  ListMovies(query?: Query): Promise<Response>
  GetAMovieQuote(id: string, query?: Query): Promise<Response>
  GetAMovie(id: string): Promise<Response>
}
