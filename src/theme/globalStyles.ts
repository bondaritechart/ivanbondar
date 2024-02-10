'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --body-bg: ${({ theme }) => theme.colors.mainBackground}
  }
`
