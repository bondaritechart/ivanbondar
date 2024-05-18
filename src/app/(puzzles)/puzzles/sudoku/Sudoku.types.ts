import { TextFormatter } from 'utils/TextFormatter'

export type Matrix = string[][]

export interface SudokuPuzzle {
  matrixPuzzle: Matrix
  matrixSolution: Matrix
}

export enum PerPageEnum {
  ONE = 'one',
  TWO = 'two',
  FOUR = 'four',
  SIX = 'six',
  NINE = 'nine',
}

export enum DifficultyEnum {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert',
}

export const perPageOptions = Object.entries(PerPageEnum).map(([_, value]) => ({
  value,
  label: TextFormatter.capitalizeFirstChar(value),
}))

export const difficultyOptions = Object.entries(DifficultyEnum).map(([_, value]) => ({
  value,
  label: TextFormatter.capitalizeFirstChar(value),
}))
