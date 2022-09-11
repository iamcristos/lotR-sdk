export declare type Response = {
  total: number
  docs: Doc[]
}

export declare type Doc = {
  _id: string
  name: string
}

export declare type Query = {
  limit: number
  offset: number
  page: number
}

export interface ILordOfRings {
  GetABook(id: string): Promise<Response>
  GetAllBook(query?: Query, filter?: object): Promise<Response>
  GetABookCharacter(id: string, query?: Query, filter?: object): Promise<Response>
  GetAChapter(id: string): Promise<Response>
  ListCharacters(query?: Query, filter?: object): Promise<Response>
  GetACharacterQuote(id: string, query?: Query, filter?: object): Promise<Response>
  GetACharacter(id: string): Promise<Response>
  ListMovies(query?: Query, filter?: object): Promise<Response>
  GetAMovieQuote(id: string, query?: Query, filter?: object): Promise<Response>
  GetAMovie(id: string): Promise<Response>
  GetAQuote(id: string): Promise<Response>
}
