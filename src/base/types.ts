import { ICharacter } from '../characters/types'
import { IChapter } from '../chapters/types'
import { IMovie } from '../movies/types'

export declare type Response = {
  total: number
  docs: Doc[]
}

export declare type Doc = {
  _id: string
  name: string
}

export declare type Query = {
  limit?: number
  offset?: number
  page?: number
  filter?: Record<string, string>
}

export interface ILordOfRings extends ICharacter, IChapter, IMovie {
  GetABook(id: string): Promise<Response>
  GetAllBook(query?: Query): Promise<Response>
  GetAQuote(id: string): Promise<Response>
}
