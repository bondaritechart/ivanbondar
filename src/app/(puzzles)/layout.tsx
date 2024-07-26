import React from 'react'

import { PUZZLES_MENU } from 'app/(puzzles)/Puzzles.const'
import { Menu } from 'app/(website)/components/Menu/Menu'
import { PageViewTracker } from 'components/PageViewTracker'
import { PageLayout } from 'components/ui'
import { PageWrapper } from 'components/ui/PageLayout/PageLayout.styles'
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
      <PageWrapper>
        <PageViewTracker />
        <Menu homepageLink={PuzzleRoutes.PUZZLES_HOME} links={PUZZLES_MENU} />
        <main>{children}</main>
      </PageWrapper>
    </PageLayout>
  )
}
