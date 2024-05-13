'use client'

import { useEffect, useRef, useState } from 'react'

import { TableSudoku } from 'app/(website)/puzzles/sudoku/Sudoku.styles'
import { Box, Flex, Stack, Text } from 'components/ui'
import { toPng } from 'html-to-image'
import { getSudoku } from 'sudoku-gen'
import { Sudoku } from 'sudoku-gen/dist/types/sudoku.type'

const CURRENT_POSITION = 5
const getPuzzle = (sudoku: Sudoku) => {
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

const Page = () => {
  const [puzzles, setPuzzles] = useState<Array<{ matrixPuzzle: string[][]; matrixSolution: string[][] }>>([])

  useEffect(() => {
    const puzzles = Array.from({ length: 4 }, () => getSudoku('hard'))
    const convertedPuzzles = puzzles.map((puzzle) => getPuzzle(puzzle))
    setPuzzles(convertedPuzzles)
  }, [])

  const puzzlesRef = useRef(null)
  const solutionsRef = useRef(null)
  const htmlToImageConvert = () => {
    // @ts-ignore
    toPng(puzzlesRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'puzzles.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
    // @ts-ignore
    toPng(solutionsRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'solutions.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Flex justify="center" ref={puzzlesRef} gap="spacing56" wrap="wrap">
          {puzzles.map((puzzle, index) => {
            return (
              <Stack align="center" key={index} gap="spacing12">
                <Text type="heading2">Puzzle #{index + CURRENT_POSITION}</Text>
                <TableSudoku key={index}>
                  {puzzle.matrixPuzzle.map((cell, i) => {
                    return (
                      <tr key={i}>
                        {cell.map((value, j) => {
                          return <td key={j}>{value}</td>
                        })}
                      </tr>
                    )
                  })}
                </TableSudoku>
              </Stack>
            )
          })}
        </Flex>
        <Flex justify="center" ref={solutionsRef} gap="spacing56" wrap="wrap">
          {puzzles.map((puzzle, index) => {
            return (
              <Stack align="center" key={'s' + 1} gap="spacing12">
                <Text type="heading2">Solution #{index + CURRENT_POSITION}</Text>
                <TableSudoku key={index}>
                  {puzzle.matrixSolution.map((cell, i) => {
                    return (
                      <tr key={i}>
                        {cell.map((value, j) => {
                          return <td key={j}>{value}</td>
                        })}
                      </tr>
                    )
                  })}
                </TableSudoku>
              </Stack>
            )
          })}
        </Flex>
      </Stack>
      <button onClick={htmlToImageConvert}>download</button>
    </Box>
  )
}

export default Page
