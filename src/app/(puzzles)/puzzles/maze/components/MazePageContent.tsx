'use client'

import { useEffect } from 'react'

import { Maze } from 'app/(puzzles)/puzzles/utils/Maze'
import { Box, Flex, Stack, Text } from 'components/ui'

export const MazePageContent = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const maze = document.getElementById('maze')
      if (maze) {
        const width = 30
        const height = 30
        const maze = new Maze(width, height)
        maze.render('maze')
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Flex template={[1, 1]}>
          <Stack>
            <Text as="h2" type="heading2">
              Maze
            </Text>
          </Stack>
          <Stack>
            <Box>
              <div id="maze" />
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
}
