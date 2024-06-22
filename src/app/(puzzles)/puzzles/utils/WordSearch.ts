import { WordSearchGame } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'

type CharPosition = [string, number, number]

export type Direction =
  | 'horizontal'
  | 'vertical'
  | 'diagonal'
  | 'diagonalReverse'
  | 'horizontal_rtl'
  | 'vertical_btt'
  | 'diagonal_btt'
  | 'diagonalReverse_btt'

export class WordSearch {
  grid: string[][]
  solution: string[][]
  words: string[]
  gridSize: number
  directions: Direction[]

  constructor(words: string[], gridSize: number, directions?: Direction[]) {
    this.words = words
    this.gridSize = gridSize
    this.grid = this.generateGrid()
    this.solution = this.generateGrid()
    this.directions = directions || ['horizontal', 'vertical', 'diagonal', 'diagonalReverse']
  }

  getCharPositions(col: number, row: number, word: string, direction: string): CharPosition[] {
    const charPositions: CharPosition[] = []
    for (let i = 0; i < word.length; i++) {
      switch (direction) {
        case 'horizontal':
          charPositions[i] = [word[i], row, col + i]
          break
        case 'horizontal_rtl':
          charPositions[i] = [word[i], row, col - i]
          break
        case 'vertical':
          charPositions[i] = [word[i], row + i, col]
          break
        case 'vertical_btt':
          charPositions[i] = [word[i], row - i, col]
          break
        case 'diagonal':
          charPositions[i] = [word[i], row + i, col + i]
          break
        case 'diagonal_btt':
          charPositions[i] = [word[i], row - i, col + i]
          break
        case 'diagonalReverse':
          charPositions[i] = [word[i], row + i, col - i]
          break
        case 'diagonalReverse_btt':
        default:
          charPositions[i] = [word[i], row - i, col - i]
          break
      }
    }

    return charPositions
  }

  getFitsFunction(col: number, row: number, word: string, direction: Direction): boolean {
    switch (direction) {
      case 'horizontal':
        return col + word.length <= this.grid.length
      case 'horizontal_rtl':
        return col - word.length + 1 >= 0
      case 'vertical':
        return row + word.length <= this.grid.length
      case 'vertical_btt':
        return row - word.length + 1 >= 0
      case 'diagonal':
        return col + word.length <= this.grid.length && row + word.length <= this.grid.length
      case 'diagonal_btt':
        return col + word.length <= this.grid.length && row - word.length + 1 >= 0
      case 'diagonalReverse':
        return col - word.length + 1 >= 0 && row + word.length <= this.grid.length
      case 'diagonalReverse_btt':
      default:
        return col - word.length + 1 >= 0 && row - word.length + 1 >= 0
    }
  }

  generateGrid(): string[][] {
    return Array.from({ length: this.gridSize }, () => Array.from({ length: this.gridSize }, () => ''))
  }

  getStartPosition(): [number, number] {
    return [Math.floor(Math.random() * this.grid.length), Math.floor(Math.random() * this.grid.length)]
  }

  getDirection(): Direction {
    return this.directions[Math.floor(Math.random() * this.directions.length)]
  }

  placeWord(word: string): void {
    let col: number
    let row: number
    let charPositions: CharPosition[]
    let fits: boolean

    if (word.length > this.gridSize) {
      throw new Error('Some words are too long. Increase grid size or remove words that are too long.')
    }

    const TRIES = 50
    let count = 0

    do {
      ;[col, row] = this.getStartPosition()
      const direction = this.getDirection()
      charPositions = this.getCharPositions(col, row, word, direction)
      fits = this.getFitsFunction(col, row, word, direction)

      if (!fits) {
        continue
      }

      for (const [char, row, col] of charPositions) {
        if (this.grid[row][col] !== '' && this.grid[row][col] !== char) {
          fits = false
          break
        }
      }

      count++

      if (count > TRIES) {
        throw new Error('Could not place word')
      }
    } while (!fits)

    for (const [char, row, col] of charPositions) {
      this.grid[row][col] = char
      this.solution[row][col] = char
    }
  }

  makeGrid(): WordSearchGame {
    this.words.forEach((word) => {
      this.placeWord(word)
    })

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        if (this.grid[i][j] === '') {
          this.grid[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
      }
    }

    return { grid: this.grid, solution: this.solution }
  }
}
