import fetch from 'node-fetch'
import { Book } from '../../src/books/index'

jest.mock('node-fetch')
const mockedFetch = jest.mocked(fetch, true)

const mockedFetchResponse = {
  Doc: [{ _id: '12wer4', name: 'test book' }],
}

describe('Books', () => {
  const book = new Book()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should GetAllBook', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await book.GetAllBook()
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should GetABook', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await book.GetABook('12wer4')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should GetAllBook', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await book.GetABookCharacter('12wer4')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })
})
