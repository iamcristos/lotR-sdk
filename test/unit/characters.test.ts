import fetch from 'node-fetch'
import { Character } from '../../src/characters/index'

jest.mock('node-fetch')
const mockedFetch = jest.mocked(fetch, true)

const mockedFetchResponse = {
  Doc: [
    {
      _id: '5cd99d4bde30eff6ebccfbbe',
      height: '',
      race: 'Human',
      gender: 'Female',
      birth: '',
      spouse: 'Belemir',
      death: '',
      realm: '',
      hair: '',
      name: 'Adanel',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
    },
  ],
}

describe('Character', () => {
  const character = new Character({ apiKey: 'test api key' })
  const unAuthCharacter = new Character()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should ListCharacters', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await character.ListCharacters()
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthCharacter.ListCharacters()).rejects.toThrowError(
      'API key is required to ListCharacters',
    )
  })

  test('should GetACharacterQuote', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await character.GetACharacterQuote('id')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () =>
      unAuthCharacter.GetACharacterQuote('id'),
    ).rejects.toThrowError('API key is required to GetACharacterQuote')
  })

  test('should GetACharacter', async () => {
    mockedFetch.mockImplementation(
      (): Promise<any> =>
        Promise.resolve({
          ok: true,
          json() {
            return Promise.resolve(mockedFetchResponse)
          },
        }),
    )
    const response = await character.GetACharacter('id')
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response).toStrictEqual(mockedFetchResponse)
  })

  test('should throw Error if API key is not supplied', async () => {
    await expect(async () => unAuthCharacter.GetACharacter('id')).rejects.toThrowError(
      'API key is required to GetACharacter',
    )
  })
})
