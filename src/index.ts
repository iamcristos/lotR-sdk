import { Base } from './base'
import { ILordOfRings } from './base/types'
import { Book } from './books'
import { Chapter } from './chapters'
import { Character } from './characters'
import { Movie } from './movies'
import { Quote } from './quotes'
import { applyMixins } from './utils'

class Typicode extends Base {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Typicode extends ILordOfRings {}
applyMixins(Typicode, [Book, Chapter, Character, Movie, Quote])

export default Typicode
