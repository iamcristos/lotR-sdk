import fetch from 'node-fetch'
import { Query } from './types'

type Config = {
  apiKey?: string
}

export abstract class Base {
  protected readonly apiKey: string
  private readonly baseUrl: string
  private limit = 10
  private offset = 0
  private page = 1
  protected query = {
    limit: this.limit,
    offset: this.offset,
    page: this.page,
  }

  constructor(config?: Config) {
    this.apiKey = config?.apiKey || ''
    this.baseUrl = 'https://the-one-api.dev/v2'
  }

  protected request<T>(endpoint: string, options?: any): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    }
    const config = {
      ...options,
      headers,
    }

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    })
  }

  protected filters(filter: object): string {
    let enrichedFilter = ''
    for (const key in filter) {
      enrichedFilter += `&${key}=${filter[key]}`
    }
    return enrichedFilter
  }

  protected GetEndPointUrl(query?: Query, filter?: object): string {
    const { limit, offset, page } = query || this.query
    let endpointUrl = `limit=${limit}&offset=${offset}&page=${page}`
    if (filter) {
      endpointUrl += this.filters(filter)
    }
    return endpointUrl
  }
}
