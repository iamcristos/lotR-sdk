import fetch from 'node-fetch'
import { Movie } from '../../src/movies/index'

jest.mock('node-fetch')
const mockedFetch = jest.mocked(fetch, true)

const mockedFetchResponse = {
  Doc: [
    {
      _id: '5cd95395de30eff6ebccde5a',
      name: 'The Battle of the Five Armies',
      runtimeInMinutes: 144,
      budgetInMillions: 250,
      boxOfficeRevenueInMillions: 956,
      academyAwardNominations: 1,
      academyAwardWins: 0,
      rottenTomatoesScore: 60,
    },
  ],
}

describe('Movie', () => {
  const movie = new Movie({ apiKey: 'test api key' })
  const unAuthMovie = new Movie()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should ListMovies', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await movie.ListMovies()
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthMovie.ListMovies()).rejects.toThrowError(
      'API key is required to ListMovies',
    )
  })

  test('should GetAMovieQuote', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await movie.GetAMovieQuote('id')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthMovie.GetAMovieQuote('id')).rejects.toThrowError(
      'API key is required to GetAMovieQuote',
    )
  })

  test('should GetAMovie', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await movie.GetAMovie('id')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthMovie.GetAMovie('id')).rejects.toThrowError(
      'API key is required to GetAMovie',
    )
  })
})
