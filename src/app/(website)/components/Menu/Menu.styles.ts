'use client'

import { Box } from 'components/ui/Box/Box'
import styled from 'styled-components'

export const MenuWrapper = styled(Box)`
  position: sticky;
  top: ${({ theme }) => theme.spacing.spacing48};
  left: 0;
  backdrop-filter: blur(4px);
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing16};
  li {
    display: flex;
    align-items: center;
  }
`
