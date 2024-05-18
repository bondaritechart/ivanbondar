import { Sudoku } from 'sudoku-gen/dist/types/sudoku.type'

export const getPuzzleMatrix = (sudoku: Sudoku) => {
  const matrixPuzzle: string[][] = Array.from({ length: 9 }, () => [])
  const matrixSolution: string[][] = Array.from({ length: 9 }, () => [])

  const puzzle = sudoku.puzzle.split('')
  const solution = sudoku.solution.split('')

  puzzle.forEach((cell, index) => {
    const row = Math.floor(index / 9)
    matrixPuzzle[row].push(cell.replace('-', ''))
    matrixSolution[row].push(solution[index])
  })

  return { matrixPuzzle, matrixSolution }
}
