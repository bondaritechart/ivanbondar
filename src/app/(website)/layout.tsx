import React from 'react'

import { Footer } from 'app/(website)/components/Footer/Footer'
import { Menu } from 'app/(website)/components/Menu/Menu'
import { GetInTouch } from 'components/GetInTouch/GetInTouch'
import { PageViewTracker } from 'components/PageViewTracker'
import { PageLayout, Stack } from 'components/ui'
import { Routes } from 'constants/routes'
import type { Metadata } from 'next'
import 'theme/global.css'

export const metadata: Metadata = {
  title: 'Ivan Bondar - Software Engineer',
  description:
    "Welcome! Your trusted destination for innovative web solutions. From captivating designs to seamless user experiences, we specialize in crafting tailored websites that elevate your online presence. Whether you're a small business or a large enterprise, I'm here to bring your vision to life. Explore my portfolio and let's collaborate to build something extraordinary for the web!",
}

const LINKS = [
  {
    href: '/ivan_bondar_cv.pdf',
    label: 'CV',
    target: '_blank',
  },
  {
    href: Routes.PORTFOLIO,
    label: 'Portfolio',
  },
  {
    href: Routes.CAREER,
    label: 'Career',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PageLayout>
      <PageViewTracker />
      <Menu links={LINKS} />
      <Stack gap="spacing96">
        <main>{children}</main>
        <Stack gap="spacing48">
          <GetInTouch />
          <Footer />
        </Stack>
      </Stack>
    </PageLayout>
  )
}
