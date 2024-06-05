export interface WordSearchTheme {
  theme: string
  words: string[]
}

export type Step = 'add_words' | 'settings'

export type Grid = string[][]

export interface WordSearchGame {
  grid: Grid
  solution: Grid
}

export interface Game extends WordSearchGame {
  theme: WordSearchTheme
}
