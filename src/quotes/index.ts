import { Base } from '../base'
import { Response } from '../base/types'
export class Quote extends Base {
  GetAQuote(id: string): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAMovieQuote')
    }
    return this.request(`/quote/${id}`)
  }
}
