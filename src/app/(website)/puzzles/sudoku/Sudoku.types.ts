export type Matrix = string[][]

export interface SudokuPuzzle {
  matrixPuzzle: Matrix
  matrixSolution: Matrix
}

export enum PerPage {
  ONE = 'one',
  TWO = 'two',
  FOUR = 'four',
  SIX = 'six',
  NINE = 'nine',
}
