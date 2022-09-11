import { Base } from '../base'
import { Response } from './types'
export class Chapter extends Base {
  GetAChapter(id: string): Promise<Response> {
    if (!this.apiKey) {
      throw new Error('API key is required to GetAChapter')
    }
    return this.request(`/chapter/${id}`)
  }
}
