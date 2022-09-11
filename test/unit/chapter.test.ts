import fetch from 'node-fetch'
import { Chapter } from '../../src/chapters/index'

jest.mock('node-fetch')
const mockedFetch = jest.mocked(fetch, true)

const mockedFetchResponse = {
  Doc: [
    {
      _id: '6091b6d6d58360f988133ba1',
      chapterName: 'The Departure of Boromir',
      book: '5cf58077b53e011a64671583',
    },
  ],
}

describe('Chapter', () => {
  const chapter = new Chapter({ apiKey: 'test api key' })
  const unAuthChapter = new Chapter()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should GetAChapter', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await chapter.GetAChapter('id')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthChapter.GetAChapter('id')).rejects.toThrowError(
      'API key is required to GetAChapter',
    )
  })
})
