import { useRef } from 'react'

import { WordSearchTheme } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { Box, Button, Flex, Input, Stack } from 'components/ui'

interface WordSearchFormProps {
  onSave: (theme: WordSearchTheme) => void
  onRemove: () => void
}

export const WordSearchForm = ({ onSave, onRemove }: WordSearchFormProps) => {
  const wordsRef = useRef<HTMLTextAreaElement>(null)
  const themeRef = useRef<HTMLInputElement>(null)

  const addThemeToList = (e: any) => {
    e.preventDefault()
    if (!themeRef.current?.value || !wordsRef.current?.value) {
      throw new Error('Fill theme and words')
    }
    const newTheme: WordSearchTheme = {
      theme: themeRef.current?.value || '',
      words: wordsRef.current?.value.replace(/\r?\n/g, ',').split(',') || [],
    }
    onSave(newTheme)
  }

  return (
    <Box minWidth={40}>
      <Stack gap="spacing12">
        <Input ref={themeRef} label="Puzzle title" type="text" />
        <textarea ref={wordsRef} name="" id="" cols={30} rows={10} />
        <Flex gap="spacing24" template={[1, 1]}>
          <Button onClick={addThemeToList}>Save</Button>
          <Button onClick={onRemove}>Delete</Button>
        </Flex>
      </Stack>
    </Box>
  )
}
