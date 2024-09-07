'use client'

import { Box, Flex } from 'components/ui'
import styled from 'styled-components'

export const AdminPageWrapper = styled(Flex)`
  flex-direction: column;
  height: 100vh;
`

export const AdminContentPositioner = styled(Flex)`
  flex: 1;
  position: relative;
`

export const AdminPageContentWrapper = styled(Flex)`
  flex-direction: column;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing20};
`

export const AdminSidebarWrapper = styled(Box)`
  padding: ${({ theme }) => theme.spacing.spacing20};
  width: 25rem;
  border-right: 1px solid ${({ theme }) => theme.colors.decorativeBorders};
`

export const TopNavWrapper = styled(Box)`
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.decorativeBorders};
  height: 60px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.spacing20};
`
