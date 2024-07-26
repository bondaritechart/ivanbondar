'use server'

import React, { PropsWithChildren } from 'react'

import { SessionWrapper } from 'lib/SessionWraper'
import { ApolloWrapper } from 'lib/apollo/ApolloWrapper'
import StyledComponentsRegistry from 'lib/registry'
import ThemeProvider from 'theme/ThemeProvider'
import { GlobalStyles } from 'theme/globalStyles'
import { inter } from 'utils/fonts'

interface RootLayoutProps extends PropsWithChildren {}

export const PageLayout = async ({ children }: RootLayoutProps) => {
  return (
    <SessionWrapper>
      <ApolloWrapper>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyles />
            <html lang="en">
              <body className={inter.className}>{children}</body>
            </html>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </ApolloWrapper>
    </SessionWrapper>
  )
}
