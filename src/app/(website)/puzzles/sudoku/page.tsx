'use client'

import { useRef, useState } from 'react'

import { PuzzleHtml } from 'app/(website)/puzzles/sudoku/components/PuzzleHtml'
import { getPNG, getPuzzle } from 'app/(website)/puzzles/utils/sudoku'
import { Box, Button, Flex, Input, Select, Stack } from 'components/ui'
import { getSudoku } from 'sudoku-gen'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

const Page = () => {
  const [puzzles, setPuzzles] = useState<Array<{ matrixPuzzle: string[][]; matrixSolution: string[][] }>>([])
  const [currentPosition, setCurrentPosition] = useState(1)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  const [generateCount, setGenerateCount] = useState(18)

  const generatePuzzles = () => {
    const puzzles = Array.from({ length: generateCount }, () => getSudoku(difficulty))
    const convertedPuzzles = puzzles.map((puzzle) => getPuzzle(puzzle))
    setPuzzles(convertedPuzzles)
  }

  const puzzlesRef = useRef(null)
  const puzzlesRef2 = useRef(null)
  const solutionsRef = useRef(null)
  const htmlToImageConvert = () => {
    getPNG(`puzzles-${currentPosition}-${currentPosition + generateCount / 2 - 1}-${difficulty}`, puzzlesRef)
    getPNG(
      `puzzles-${currentPosition + generateCount / 2}-${currentPosition + generateCount - 1}-${difficulty}`,
      puzzlesRef2,
    )
    getPNG(`solutions-${currentPosition}-${currentPosition + generateCount - 1}-${difficulty}`, solutionsRef)
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing56">
        <Flex align="flex-end" gap="spacing8">
          <Button onClick={generatePuzzles}>Generate</Button>
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
          <Button onClick={htmlToImageConvert}>Download PNG</Button>
        </Flex>
        <Box width="1440px">
          <Stack gap="spacing24">
            <Flex justify="space-between" ref={puzzlesRef} gap="spacing24" id="p1" wrap="wrap">
              {puzzles.slice(0, generateCount / 2).map((puzzle, index) => {
                return (
                  <PuzzleHtml
                    key={index}
                    difficulty={difficulty}
                    currentPosition={currentPosition}
                    index={index}
                    matrix={puzzle.matrixPuzzle}
                    tableComponent="puzzle"
                  />
                )
              })}
            </Flex>
            <Flex justify="space-between" ref={puzzlesRef2} gap="spacing24" id="p2" wrap="wrap">
              {puzzles.slice(generateCount / 2).map((puzzle, index) => {
                return (
                  <PuzzleHtml
                    key={index}
                    difficulty={difficulty}
                    currentPosition={currentPosition}
                    index={index}
                    matrix={puzzle.matrixPuzzle}
                    tableComponent="puzzle"
                  />
                )
              })}
            </Flex>
            <Flex justify="space-between" id="sol" ref={solutionsRef} gap="spacing24" wrap="wrap">
              {puzzles.map((puzzle, index) => {
                return (
                  <PuzzleHtml
                    key={index}
                    difficulty={difficulty}
                    currentPosition={currentPosition}
                    index={index}
                    matrix={puzzle.matrixSolution}
                    tableComponent="solution"
                  />
                )
              })}
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Page
