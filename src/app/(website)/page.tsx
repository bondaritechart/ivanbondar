import React from 'react'

import { HeroHeader } from 'app/(website)/components/HeroHeader/HeroHeader'
import { Partners } from 'app/(website)/components/Partners/Partners'
import { Projects } from 'app/(website)/components/Projects/Projects'
import { Stack } from 'components/ui'

export default function Home() {
  return (
    <Stack gap="spacing96">
      <HeroHeader />
      <Partners />
      <Projects />
    </Stack>
  )
}
