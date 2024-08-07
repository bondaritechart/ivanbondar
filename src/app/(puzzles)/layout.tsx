import React from 'react'

import { PUZZLES_MENU } from 'app/(puzzles)/Puzzles.const'
import { Menu } from 'app/(website)/components/Menu/Menu'
import { PageLayout } from 'components/ui'
import { PuzzleRoutes } from 'constants/routes'
import 'theme/global.css'

export const metadata = {
  title: 'Create and Print Custom Puzzles - Generator Tools',
  description:
    'Design personalized printables with our tools, including a tartan maker, bingo generator, word search and crossword puzzle creators, sudoku puzzles, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <Menu homepageLink={PuzzleRoutes.PUZZLES_HOME} links={PUZZLES_MENU} />
      <main>{children}</main>
    </PageLayout>
  )
}
