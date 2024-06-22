import { useState } from 'react'

import { WordSearchState, WordSearchTheme } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { Box, Button, Flex, Input, Stack } from 'components/ui'

interface WordSearchFormProps {
  onSave: (theme: WordSearchTheme) => void
  onRemove: () => void
  themes: WordSearchState[]
  themeId: number
}

export const WordSearchForm = ({ onSave, onRemove, themeId, themes }: WordSearchFormProps) => {
  const [theme, setTheme] = useState('')
  const [words, setWords] = useState<string[]>([])
  const currentTheme = themes.find((theme) => theme.id === themeId)
  const themeAdded = !!currentTheme?.words.length
  const themeChanged = currentTheme?.words.join() !== words.join()
  const addThemeToList = (e: any) => {
    e.preventDefault()
    if (!words.length || !theme) {
      throw new Error('Fill theme and words')
    }
    const newTheme: WordSearchTheme = {
      theme,
      words,
    }
    onSave(newTheme)
  }

  const getCtaCopy = () => {
    if (!themeAdded) {
      return 'Save'
    }
    if (themeChanged) {
      return 'Update'
    }

    return 'Saved'
  }

  return (
    <Box minWidth={40}>
      <Stack gap="spacing12">
        <Input onChange={(e) => setTheme(e.target.value)} label="Puzzle title" type="text" />
        <textarea
          onChange={(e) => setWords(e.target.value.replace(/\r?\n/g, ',').split(','))}
          name=""
          id=""
          cols={30}
          rows={10}
        />
        <Flex gap="spacing24" template={[1, 1]}>
          <Button disabled={themeAdded && !themeChanged} onClick={addThemeToList}>
            {getCtaCopy()}
          </Button>
          <Button onClick={onRemove}>Delete</Button>
        </Flex>
      </Stack>
    </Box>
  )
}
