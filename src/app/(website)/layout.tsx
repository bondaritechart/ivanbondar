import React from 'react'

import { Footer } from 'app/(website)/components/Footer/Footer'
import { Menu } from 'app/(website)/components/Menu/Menu'
import { PageWrapper } from 'app/(website)/components/styles'
import { GetInTouch } from 'components/GetInTouch/GetInTouch'
import { Stack } from 'components/ui'
import { SessionWrapper } from 'lib/SessionWraper'
import StyledComponentsRegistry from 'lib/registry'
import type { Metadata } from 'next'
import ThemeProvider from 'theme/ThemeProvider'
import 'theme/global.css'
import { GlobalStyles } from 'theme/globalStyles'
import { inter } from 'utils/fonts'

export const metadata: Metadata = {
  title: 'Ivan Bondar - Software Engineer',
  description:
    "Welcome! Your trusted destination for innovative web solutions. From captivating designs to seamless user experiences, we specialize in crafting tailored websites that elevate your online presence. Whether you're a small business or a large enterprise, I'm here to bring your vision to life. Explore my portfolio and let's collaborate to build something extraordinary for the web!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionWrapper>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <GlobalStyles />
          <html lang="en">
            <body className={inter.className}>
              <PageWrapper>
                <Menu />
                <Stack gap="spacing96">
                  <main>{children}</main>
                  <Stack gap="spacing48">
                    <GetInTouch />
                    <Footer />
                  </Stack>
                </Stack>
              </PageWrapper>
            </body>
          </html>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </SessionWrapper>
  )
}
