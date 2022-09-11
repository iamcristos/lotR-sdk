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
      enrichedFilter += enrichedFilter ? `&${key}${filter[key]}` : `${key}${filter[key]}`
    }
    return enrichedFilter
  }

  protected GetEndPointUrl(query?: Query): string {
    const queryArray = ['limit', 'offset', 'page']
    const { filter } = query || {}
    let endpointUrl = ''
    for (const key in query) {
      if (queryArray.includes(key)) {
        endpointUrl += endpointUrl ? `&${key}=${query[key]}` : `${key}=${query[key]}`
      }
    }
    if (filter) {
      endpointUrl += this.filters(filter)
    }
    return endpointUrl
  }
}
