'use client'

import { PropsWithChildren } from 'react'

import { TableSolutions, TableSudoku } from 'app/(website)/puzzles/sudoku/Sudoku.styles'
import { Stack, Text } from 'components/ui'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

interface PuzzleHtmlProps extends PropsWithChildren {
  difficulty: Difficulty
  currentPosition: number
  matrix: string[][]
  index: number
  tableComponent: 'solution' | 'puzzle'
}

export const PuzzleHtml = ({ difficulty, index, currentPosition, matrix, tableComponent }: PuzzleHtmlProps) => {
  const TableComponent = tableComponent === 'solution' ? TableSolutions : TableSudoku

  return (
    <Stack align="center" gap="spacing8">
      <Text color="headingText" transform="uppercase" type="heading3">
        {difficulty} #{index + currentPosition}
      </Text>
      <TableComponent key={index}>
        {matrix.map((cell, i) => {
          return (
            <tr key={i}>
              {cell.map((value, j) => {
                return <td key={j}>{value}</td>
              })}
            </tr>
          )
        })}
      </TableComponent>
    </Stack>
  )
}
