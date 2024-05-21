type CharPosition = [string, number, number]

export class WordSearch {
  grid: string[][]
  solution: string[][]
  words: string[]
  gridSize: number

  directions = ['horizontal', 'vertical', 'diagonal', 'diagonalReverse']

  constructor(words: string[], gridSize: number) {
    this.grid = this.generateGrid()
    this.solution = this.generateGrid()
    this.words = words
    this.gridSize = gridSize
  }

  getCharPositions(col: number, row: number, word: string, direction: string) {
    const charPositions: CharPosition[] = []
    for (let i = 0; i < word.length; i++) {
      switch (direction) {
        case 'horizontal':
          charPositions[i] = [word[i], row, col + i]
          break
        case 'vertical':
          charPositions[i] = [word[i], row + i, col]
          break
        case 'diagonal':
          charPositions[i] = [word[i], row + i, col + i]
          break
        case 'diagonalReverse':
        default:
          charPositions[i] = [word[i], row + i, col - i]
          break
      }
    }

    return charPositions
  }

  getFitsFunction(col: number, row: number, word: string, direction: string) {
    switch (direction) {
      case 'horizontal':
        return col + word.length <= this.grid.length
      case 'vertical':
        return row + word.length <= this.grid.length
      case 'diagonal':
        return col + word.length <= this.grid.length && row + word.length <= this.grid.length
      case 'diagonalReverse':
      default:
        return col - word.length >= 0 && row + word.length <= this.grid.length
    }
  }

  generateGrid() {
    return Array.from({ length: this.gridSize }, () => Array.from({ length: this.gridSize }, () => ''))
  }

  getStartPosition() {
    return [Math.floor(Math.random() * this.grid.length), Math.floor(Math.random() * this.grid.length)]
  }

  getDirection() {
    return this.directions[Math.floor(Math.random() * this.directions.length)]
  }

  placeWord(word: string) {
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
      console.log('placing word', word)
      ;[col, row] = this.getStartPosition()
      const direction = this.getDirection()
      charPositions = this.getCharPositions(col, row, word, direction)
      fits = this.getFitsFunction(col, row, word, direction)
      if (!fits) {
        continue
      }
      charPositions.forEach(([char, row, col]) => {
        if (this.grid[row][col] !== '' && this.grid[row][col] !== char) {
          fits = false
        }
      })
      count++
      if (count > TRIES) {
        throw new Error('Could not place word')
      }
      console.log('placed word', word, 'at', row, col, 'direction', direction)
    } while (!fits)
    for (let i = 0; i < word.length; i++) {
      const [char, row, col] = charPositions[i]
      this.grid[row][col] = char
      this.solution[row][col] = char
    }
  }

  makeGrid() {
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
