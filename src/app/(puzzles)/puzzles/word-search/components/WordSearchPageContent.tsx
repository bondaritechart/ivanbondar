'use client'

import { useEffect, useRef, useState } from 'react'

import { usePDF } from '@react-pdf/renderer'
import { Direction, WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Game, WordSearchState } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { WordSearchForm } from 'app/(puzzles)/puzzles/word-search/components/WordSearchForm'
import { WordSearchPdf } from 'app/(puzzles)/puzzles/word-search/components/WordSearchPdf'
import { Box, Button, Flex, Input, Stack, Text } from 'components/ui'
import { Checkbox } from 'components/ui/Checkbox/Checkbox'

const DIRECTIONS: Array<{ label: string; value: Direction }> = [
  {
    label: 'Horizontal',
    value: 'horizontal',
  },
  {
    value: 'vertical',
    label: 'Vertical',
  },
  {
    label: 'Diagonal',
    value: 'diagonal',
  },
  {
    value: 'diagonalReverse',
    label: 'Diagonal reverse',
  },
  {
    value: 'horizontal_rtl',
    label: 'Horizontal left to right',
  },
  {
    value: 'vertical_btt',
    label: 'Vertical bottom to top',
  },
  {
    value: 'diagonal_btt',
    label: 'Diagonal bottom to top',
  },
  {
    label: 'Diagonal reverse bottom to top',
    value: 'diagonalReverse_btt',
  },
]

export const WordSearchPageContent = () => {
  const gridSizeRef = useRef<HTMLInputElement>(null)

  const [themes, setThemes] = useState<WordSearchState[]>([])
  const [games, setGames] = useState<Game[]>([])
  const [directions, setDirections] = useState<Direction[]>([])
  const [instance, updateInstance] = usePDF({ document: <WordSearchPdf games={games} /> })
  const generatePuzzles = (e: any) => {
    e.preventDefault()
    const gridSize = parseInt(gridSizeRef.current?.value || '30')
    const wsGames: Game[] = []
    themes.forEach((theme) => {
      const wordSearch = new WordSearch(theme.words, gridSize, directions)
      const game = wordSearch.makeGrid()
      wsGames.push({ theme, ...game })
    })
    setGames(wsGames)
  }

  useEffect(() => {
    if (games.length) {
      updateInstance(<WordSearchPdf games={games} />)
    }
  }, [games])

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

  const removeAll = () => {
    localStorage.removeItem('ws-games')
    setGames([])
    setThemes([])
  }

  const removeTheme = (id: number) => {
    const newThemes = themes.filter((t) => {
      return id !== t.id
    })
    setThemes(newThemes)
  }

  useEffect(() => {
    const storedThemes = localStorage.getItem('ws-games')
    if (storedThemes) {
      setThemes(JSON.parse(storedThemes))
    }
  }, [])

  const saveTheme = (theme: WordSearchState, index: number) => {
    const newThemes = [...themes]
    newThemes[index] = theme
    localStorage.setItem('ws-games', JSON.stringify(newThemes))
    setThemes(newThemes)
  }

  const changeDirections = (isChecked: boolean, direction: Direction) => {
    if (isChecked) {
      setDirections((prev) => [...prev, direction])
    } else {
      setDirections((prev) => prev.filter((dir) => dir !== direction))
    }
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
            <Button width="100%" target="_blank" as="a" href={instance.url || undefined} disabled={instance.loading}>
              {instance.loading ? 'Loading...' : 'Download PDF'}
            </Button>
          </Box>
        </Flex>
        <Flex gap="spacing24" wrap="wrap">
          {DIRECTIONS.map((dir) => {
            return (
              <Checkbox
                onChange={(checked) => changeDirections(checked, dir.value)}
                name="directions"
                id={dir.value}
                key={dir.value}
              >
                {dir.label}
              </Checkbox>
            )
          })}
        </Flex>
        <Flex gap="spacing24" template={[1, 1]}>
          <Button onClick={addNewTheme}>Add new theme</Button>
          <Button onClick={removeAll}>Remove all</Button>
        </Flex>
        <Flex template={[1, 1, 1]} wrap="wrap" gap="spacing12">
          {themes.map((theme, index) => {
            return (
              <WordSearchForm
                key={theme.id}
                onRemove={() => removeTheme(theme.id)}
                themes={themes}
                themeId={theme.id}
                onSave={(t) => saveTheme({ ...t, id: theme.id }, index)}
              />
            )
          })}
        </Flex>
      </Stack>
    </Box>
  )
}
