'use client'

import { useState } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { PerPage, SudokuPuzzle } from 'app/(website)/puzzles/sudoku/Sudoku.types'
import { PuzzleHtml } from 'app/(website)/puzzles/sudoku/components/PuzzleHtml'
import { PuzzlePdf } from 'app/(website)/puzzles/sudoku/components/PuzzlePdf/PuzzlePdf'
import { getPuzzleMatrix } from 'app/(website)/puzzles/utils/sudoku'
import { Box, Button, Flex, Input, Select, Stack } from 'components/ui'
import { getSudoku } from 'sudoku-gen'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

const SudokuPage = () => {
  const [puzzles, setPuzzles] = useState<Array<SudokuPuzzle>>([])
  const [currentPosition, setCurrentPosition] = useState(1)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [generateCount, setGenerateCount] = useState(18)
  const [puzzlesPerPage, setPuzzlesPerPage] = useState(PerPage.NINE)

  const generatePuzzles = () => {
    const puzzles = Array.from({ length: generateCount }, () => getSudoku(difficulty))
    const convertedPuzzles = puzzles.map((puzzle) => getPuzzleMatrix(puzzle))
    setPuzzles(convertedPuzzles)
  }

  const perPageOptions = Object.entries(PerPage).map(([key, value]) => ({ value, label: key }))

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Flex template={[1, 1]}>
        <Stack gap="spacing16">
          <Input
            label="Start with"
            value={currentPosition}
            onChange={(e) => setCurrentPosition(parseInt(e.target.value))}
          />
          <Input label="Amount" value={generateCount} onChange={(e) => setGenerateCount(parseInt(e.target.value))} />
          <Select
            label="Difficulty"
            options={[
              { value: 'easy', label: 'Easy' },
              { value: 'medium', label: 'Medium' },
              { value: 'hard', label: 'Hard' },
              { value: 'expert', label: 'Expert' },
            ]}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          />
          <Select
            label="Puzzles per page"
            options={perPageOptions}
            value={puzzlesPerPage}
            onChange={(e) => setPuzzlesPerPage(e.target.value as PerPage)}
          />
          <Button onClick={generatePuzzles}>Generate</Button>

          <PDFDownloadLink
            fileName={`puzzles-${currentPosition}-${currentPosition + generateCount - 1}-${difficulty}.pdf`}
            document={
              <PuzzlePdf
                perPage={puzzlesPerPage}
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

export default SudokuPage
