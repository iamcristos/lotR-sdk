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
  chapterName: string
  book: string
}
