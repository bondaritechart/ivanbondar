'use server'

import React, { PropsWithChildren } from 'react'

import { ApolloWrapper } from 'lib/apollo/ApolloWrapper'
import { AuthWrapper } from 'lib/auth/AuthWrapper'
import StyledComponentsRegistry from 'lib/registry'
import ThemeProvider from 'theme/ThemeProvider'
import { GlobalStyles } from 'theme/globalStyles'
import { inter } from 'utils/fonts'

interface RootLayoutProps extends PropsWithChildren {}

export const PageLayout = async ({ children }: RootLayoutProps) => {
  return (
    <AuthWrapper>
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
    </AuthWrapper>
  )
}
