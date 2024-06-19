'use client'

import { useRef, useState } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Game, WordSearchTheme } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { WordSearchForm } from 'app/(puzzles)/puzzles/word-search/components/WordSearchForm'
import { WordSearchPdf } from 'app/(puzzles)/puzzles/word-search/components/WordSearchPdf'
import { Box, Button, Flex, Input, Stack, Text } from 'components/ui'

interface WordSearchState extends WordSearchTheme {
  id: number
}

export const WordSearchPageContent = () => {
  const gridSizeRef = useRef<HTMLInputElement>(null)

  const [themes, setThemes] = useState<WordSearchState[]>([])
  const [games, setGames] = useState<Game[]>([])

  const generatePuzzles = (e: any) => {
    e.preventDefault()
    const gridSize = parseInt(gridSizeRef.current?.value || '30')
    const wsGames: Game[] = []
    themes.forEach((theme) => {
      const wordSearch = new WordSearch(theme.words, gridSize)
      const game = wordSearch.makeGrid()
      wsGames.push({ theme, ...game })
    })

    setGames(wsGames)
  }

  const addNewTheme = () => {
    setThemes((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          theme: '',
          words: [],
        },
      ]
    })
  }

  const removeTheme = (id: number) => {
    const newThemes = themes.filter((t) => {
      return id !== t.id
    })
    setThemes(newThemes)
  }

  const saveTheme = (theme: WordSearchState, index: number) => {
    const newThemes = [...themes]
    newThemes[index] = theme
    setThemes(newThemes)
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Text as="h2" type="heading2">
          Word Search
        </Text>
        <Flex align="end" gap="spacing24" template={[1, 1, 1]}>
          <Box>
            <Input ref={gridSizeRef} label="Grid Size" type="text" />
          </Box>
          <Box>
            <Button width="100%" type="button" onClick={generatePuzzles}>
              Generate puzzles
            </Button>
          </Box>
          <Box>
            <PDFDownloadLink fileName="word-search.pdf" document={<WordSearchPdf games={games} />}>
              {({ loading }) => (
                <Button width="100%" type="button" disabled={loading}>
                  {loading ? 'Loading...' : 'Download PDF'}
                </Button>
              )}
            </PDFDownloadLink>
          </Box>
        </Flex>
        <Button onClick={addNewTheme}>Add new theme</Button>
        <Flex template={[1, 1, 1]} wrap="wrap" gap="spacing12">
          {themes.map((theme, index) => {
            return (
              <WordSearchForm
                key={theme.id}
                onRemove={() => removeTheme(theme.id)}
                onSave={(t) => saveTheme({ ...t, id: theme.id }, index)}
              />
            )
          })}
        </Flex>
        <p>{JSON.stringify(themes)}</p>
      </Stack>
    </Box>
  )
}
