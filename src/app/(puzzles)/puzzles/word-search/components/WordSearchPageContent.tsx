'use client'

import { useRef, useState } from 'react'

import { WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Box, Flex, Input, Stack, Text } from 'components/ui'
import { TextFormatter } from 'utils/TextFormatter'

export const WordSearchPageContent = () => {
  const wordsRef = useRef<HTMLTextAreaElement>(null)
  const gridSizeRef = useRef<HTMLInputElement>(null)

  const [grid, setGrid] = useState<string[][]>([])
  const [solution, setSolution] = useState<string[][]>([])

  const generatePuzzle = () => {
    const words = wordsRef.current?.value.replace(/\r?\n/g, ',').split(',')
    if (!words) {
      return
    }
    const gridSize = parseInt(gridSizeRef.current?.value || '10')
    const game = new WordSearch(words, gridSize)
    const _grid = game.makeGrid()
    setGrid(_grid.grid)
    setSolution(_grid.solution)
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Flex template={[1, 1]}>
          <Stack>
            <Text as="h2" type="heading2">
              Word Search
            </Text>
            <Stack gap="spacing12">
              <Input ref={gridSizeRef} label="Grid Size" type="text" />
              <textarea ref={wordsRef} name="" id="" cols={30} rows={10} />
              <button onClick={generatePuzzle}>get</button>
            </Stack>
          </Stack>
          <Stack />
        </Flex>
        <Flex align="center" gap="spacing56" justify="center">
          <Box>
            <Stack gap="spacing12">
              {wordsRef.current?.value
                .replace(/\r?\n/g, ',')
                .split(',')
                .map((word, index) => (
                  <Text key={index} type="heading3">
                    {TextFormatter.capitalizeFirstChar(word)}
                  </Text>
                ))}
            </Stack>
          </Box>
          <Box>
            <table className="base-table">
              <tbody>
                {grid.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
          <Box>
            <table className="base-table">
              <tbody>
                {solution.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}
