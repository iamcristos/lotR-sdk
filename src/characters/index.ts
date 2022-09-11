import { Base } from '../base'
import { Query } from '../base/types'
import { Response } from './types'
export class Character extends Base {
  ListCharacters(query?: Query): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to ListCharacters')
    }
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/character?${endpointUrl}`)
  }

  GetACharacterQuote(id: string, query?: Query): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetACharacterQuote')
    }
    const endpointUrl = this.GetEndPointUrl(query)
    return this.request(`/character/${id}/quote?${endpointUrl}`)
  }

  GetACharacter(id: string): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetACharacter')
    }
    return this.request(`/character/${id}`)
  }
}
