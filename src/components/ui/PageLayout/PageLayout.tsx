import React, { PropsWithChildren } from 'react'

import { PageWrapper } from 'components/ui/PageLayout/PageLayout.styles'
import { SessionWrapper } from 'lib/SessionWraper'
import StyledComponentsRegistry from 'lib/registry'
import ThemeProvider from 'theme/ThemeProvider'
import { GlobalStyles } from 'theme/globalStyles'
import { inter } from 'utils/fonts'

interface RootLayoutProps extends PropsWithChildren {}

export const PageLayout = ({ children }: RootLayoutProps) => {
  return (
    <SessionWrapper>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <GlobalStyles />
          <html lang="en">
            <body className={inter.className}>
              <PageWrapper>{children}</PageWrapper>
            </body>
          </html>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </SessionWrapper>
  )
}
