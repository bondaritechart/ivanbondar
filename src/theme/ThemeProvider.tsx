'use client'

import React from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from 'theme/index'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
