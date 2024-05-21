'use client'

import { useRef, useState } from 'react'

import { WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Box, Flex, Input, Stack, Text } from 'components/ui'

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
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <h1>Word Search</h1>
      <Flex gap="spacing24" template={[1, 1]}>
        <Stack gap="spacing12">
          <Input ref={gridSizeRef} label="Grid Size" type="text" />
          <textarea ref={wordsRef} name="" id="" cols={30} rows={10} />
          <button onClick={generatePuzzle}>get</button>
        </Stack>
        <Stack>
          <Text>Result</Text>
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
        </Stack>
      </Flex>
    </Box>
  )
}
