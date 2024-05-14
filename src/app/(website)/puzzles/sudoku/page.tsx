'use client'

import { useEffect, useRef, useState } from 'react'

import { TableSolutions, TableSudoku } from 'app/(website)/puzzles/sudoku/Sudoku.styles'
import { Box, Button, Flex, Stack, Text } from 'components/ui'
import { toPng } from 'html-to-image'
import { getSudoku } from 'sudoku-gen'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'
import { Sudoku } from 'sudoku-gen/dist/types/sudoku.type'

import htmlToSvg from 'htmlsvg'

const CURRENT_POSITION = 55
const DIFFICULTY: Difficulty = 'easy'
const GENERATE_COUNT = 18

const getPNG = (name: string, ref: any) => {
  // @ts-ignore
  toPng(ref.current, { cacheBust: false })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = `${name}.png`
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}

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
    const puzzles = Array.from({ length: GENERATE_COUNT }, () => getSudoku(DIFFICULTY))
    const convertedPuzzles = puzzles.map((puzzle) => getPuzzle(puzzle))
    setPuzzles(convertedPuzzles)
  }, [])

  const puzzlesRef = useRef(null)
  const puzzlesRef2 = useRef(null)
  const solutionsRef = useRef(null)
  const htmlToImageConvert = () => {
    getPNG(`puzzles-${CURRENT_POSITION}-${CURRENT_POSITION + GENERATE_COUNT / 2 - 1}-${DIFFICULTY}`, puzzlesRef)
    getPNG(
      `puzzles-${CURRENT_POSITION + GENERATE_COUNT / 2}-${CURRENT_POSITION + GENERATE_COUNT - 1}-${DIFFICULTY}`,
      puzzlesRef2,
    )
    getPNG(`solutions-${CURRENT_POSITION}-${CURRENT_POSITION + GENERATE_COUNT - 1}-${DIFFICULTY}`, solutionsRef)
  }

  const downloadSVG = async () => {
    await htmlToSvg(document.getElementById('p1'), {
      downloadSvg: true,
      filename: `puzzles-${CURRENT_POSITION}-${DIFFICULTY}`,
    })
    await htmlToSvg(document.getElementById('p2'), {
      downloadSvg: true,
      filename: `puzzles-${CURRENT_POSITION * 2}-${DIFFICULTY}`,
    })
    await htmlToSvg(document.getElementById('sol'), {
      downloadSvg: true,
      filename: `solutions-${CURRENT_POSITION}-${DIFFICULTY}`,
    })
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Flex gap="spacing8">
        <Button onClick={htmlToImageConvert}>Download PNG</Button>
        <Button onClick={downloadSVG}>Download SVG</Button>
      </Flex>
      <Box width="1440px">
        <Stack gap="spacing24">
          <Flex justify="space-between" ref={puzzlesRef} gap="spacing24" id="p1" wrap="wrap">
            {puzzles.slice(0, GENERATE_COUNT / 2).map((puzzle, index) => {
              return (
                <Stack align="center" key={index} gap="spacing8">
                  <Text transform="uppercase" type="heading3">
                    {DIFFICULTY} #{index + CURRENT_POSITION}
                  </Text>
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
          <Flex justify="space-between" ref={puzzlesRef2} gap="spacing24" id="p2" wrap="wrap">
            {puzzles.slice(GENERATE_COUNT / 2).map((puzzle, index) => {
              return (
                <Stack align="center" key={index} gap="spacing8">
                  <Text transform="uppercase" type="heading3">
                    {DIFFICULTY} #{index + CURRENT_POSITION + GENERATE_COUNT / 2}
                  </Text>
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
          <Flex justify="space-between" id="sol" ref={solutionsRef} gap="spacing24" wrap="wrap">
            {puzzles.map((puzzle, index) => {
              return (
                <Stack align="center" key={'s' + 1} gap="spacing8">
                  <Text type="heading3" transform="capitalize">
                    {DIFFICULTY} #{index + CURRENT_POSITION}
                  </Text>
                  <TableSolutions key={index}>
                    {puzzle.matrixSolution.map((cell, i) => {
                      return (
                        <tr key={i}>
                          {cell.map((value, j) => {
                            return <td key={j}>{value}</td>
                          })}
                        </tr>
                      )
                    })}
                  </TableSolutions>
                </Stack>
              )
            })}
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}

export default Page
