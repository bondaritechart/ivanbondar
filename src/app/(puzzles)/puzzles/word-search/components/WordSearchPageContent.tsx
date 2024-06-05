'use client'

import { useRef, useState } from 'react'

import { WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Game, Step, WordSearchTheme } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { Box, Button, Flex, Input, Stack, Text } from 'components/ui'
import { TextFormatter } from 'utils/TextFormatter'

export const WordSearchPageContent = () => {
  const wordsRef = useRef<HTMLTextAreaElement>(null)
  const gridSizeRef = useRef<HTMLInputElement>(null)
  const themeRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [themes, setThemes] = useState<WordSearchTheme[]>([])
  const [step, setStep] = useState<Step>('add_words')
  const [games, setGames] = useState<Game[]>([])

  const generatePuzzles = () => {
    const gridSize = parseInt(gridSizeRef.current?.value || '10')
    const wsGames: Game[] = []
    themes.forEach((theme) => {
      const wordSearch = new WordSearch(theme.words, gridSize)
      const game = wordSearch.makeGrid()
      wsGames.push({ theme, ...game })
    })
    setGames(wsGames)
  }

  const addThemeToList = (e) => {
    e.preventDefault()
    if (!themeRef.current?.value || !wordsRef.current?.value) {
      throw new Error('Fill theme and words')
    }
    const newTheme: WordSearchTheme = {
      theme: themeRef.current?.value,
      words: wordsRef.current?.value.replace(/\r?\n/g, ',').split(','),
    }
    setThemes((prev) => [...prev, newTheme])
    formRef.current?.reset()
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Flex template={[1, 1]} gap="spacing12">
          <Stack>
            <Text as="h2" type="heading2">
              Word Search
            </Text>
            <form action="" ref={formRef}>
              <Stack gap="spacing12">
                {step === 'add_words' && (
                  <Stack gap="spacing12">
                    <Input ref={themeRef} label="Theme" type="text" />
                    <textarea ref={wordsRef} name="" id="" cols={30} rows={10} />
                    <Button onClick={addThemeToList}>Add theme to list</Button>
                    <Button onClick={() => setStep('settings')}>Next step</Button>
                  </Stack>
                )}
                {step === 'settings' && (
                  <Stack gap="spacing12">
                    <Input ref={gridSizeRef} label="Grid Size" type="text" />
                    <Button onClick={() => setStep('add_words')}>Go back</Button>
                    <Button onClick={addThemeToList}>Get puzzles</Button>
                  </Stack>
                )}
              </Stack>
            </form>
          </Stack>
          <Stack>
            {themes.map((theme) => {
              return (
                <Stack key={theme.theme}>
                  <Text as="h3">{theme.theme}</Text>
                  <Text>{theme.words.join(', ')}</Text>
                </Stack>
              )
            })}
          </Stack>
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
