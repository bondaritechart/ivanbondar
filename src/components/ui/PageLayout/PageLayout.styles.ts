'use client'

import { Box } from 'components/ui/Box/Box'
import styled from 'styled-components'
import { smallDevice } from 'theme'

export const PageWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.spacing48};
  ${smallDevice} {
    padding: ${({ theme }) => `${theme.spacing.spacing0} ${theme.spacing.spacing16}`};
  }
  main {
    margin-top: -104px;
    ${smallDevice} {
      margin-top: 0;
    }
  }
`
