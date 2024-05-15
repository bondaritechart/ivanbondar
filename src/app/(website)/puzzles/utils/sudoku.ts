import { toPng } from 'html-to-image'
import { Sudoku } from 'sudoku-gen/dist/types/sudoku.type'

export const getPNG = (name: string, ref: any) => {
  // @ts-ignore
  toPng(ref.current, { cacheBust: false }).then((dataUrl) => {
    const link = document.createElement('a')
    link.download = `${name}.png`
    link.href = dataUrl
    link.click()
  })
}

export const getPuzzle = (sudoku: Sudoku) => {
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
