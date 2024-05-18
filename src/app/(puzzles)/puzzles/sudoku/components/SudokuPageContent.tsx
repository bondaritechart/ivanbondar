'use client'

import { useRef, useState } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'
import {
  DifficultyEnum,
  PerPageEnum,
  SudokuPuzzle,
  difficultyOptions,
  perPageOptions,
} from 'app/(puzzles)/puzzles/sudoku/Sudoku.types'
import { PuzzleHtml } from 'app/(puzzles)/puzzles/sudoku/components/PuzzleHtml'
import { PuzzlePdf } from 'app/(puzzles)/puzzles/sudoku/components/PuzzlePdf/PuzzlePdf'
import { getPuzzleMatrix } from 'app/(puzzles)/puzzles/utils/sudoku'
import { Box, Button, Flex, Input, Select, Stack } from 'components/ui'
import { getSudoku } from 'sudoku-gen'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

export const SudokuPageContent = () => {
  const [puzzles, setPuzzles] = useState<Array<SudokuPuzzle>>([])

  const difficultyRef = useRef<HTMLSelectElement>(null)
  const perPageRef = useRef<HTMLSelectElement>(null)
  const currentPositionRef = useRef<HTMLInputElement>(null)
  const generateCountRef = useRef<HTMLInputElement>(null)

  const difficulty = (difficultyRef.current?.value as Difficulty) || DifficultyEnum.EASY
  const perPage = (perPageRef.current?.value as PerPageEnum) || PerPageEnum.ONE
  const currentPosition = parseInt(currentPositionRef.current?.value || '1')
  const generateCount = parseInt(generateCountRef.current?.value || '1')

  const generatePuzzles = () => {
    const puzzles = Array.from({ length: parseInt(generateCountRef.current?.value || '1') }, () =>
      getSudoku(difficultyRef.current?.value as Difficulty),
    )
    const convertedPuzzles = puzzles.map((puzzle) => getPuzzleMatrix(puzzle))
    setPuzzles(convertedPuzzles)
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Flex template={[1, 1]}>
        <Stack gap="spacing16">
          <Input defaultValue={1} label="Start count with" ref={currentPositionRef} />
          <Input defaultValue={12} label="Amount" ref={generateCountRef} />
          <Select label="Difficulty" ref={difficultyRef} options={difficultyOptions} />
          <Select label="Puzzles per page" options={perPageOptions} ref={perPageRef} />
          <Button onClick={generatePuzzles}>Generate Puzzles</Button>

          <PDFDownloadLink
            fileName={`puzzles-${currentPosition}-${currentPosition + generateCount - 1}-${difficulty}.pdf`}
            document={
              <PuzzlePdf
                perPage={perPage}
                currentPosition={currentPosition}
                difficulty={difficulty}
                puzzles={puzzles}
              />
            }
          >
            {({ loading }) => (
              <Button width="100%" disabled={!puzzles.length || loading}>
                {loading ? 'Loading...' : 'Download PDF'}
              </Button>
            )}
          </PDFDownloadLink>
        </Stack>
        <Flex direction="column" align="flex-end">
          {puzzles.length ? (
            <PuzzleHtml
              difficulty={difficulty}
              currentPosition={currentPosition}
              index={0}
              matrix={puzzles[0].matrixPuzzle}
              tableComponent="puzzle"
              title="Example"
            />
          ) : null}
        </Flex>
      </Flex>
    </Box>
  )
}
