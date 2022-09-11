import { Base } from '../base'
import { Query, Response } from '../base/types'
export class Book extends Base {
  GetAllBook(query?: Query): Promise<Response> {
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/book?${endpointUrl}`)
  }

  GetABook(id: string): Promise<Response> {
    return this.request(`/book/${id}`)
  }

  GetABookCharacter(id: string, query?: Query): Promise<Response> {
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/book/${id}/chapter?${endpointUrl}`)
  }
}
