'use client'

import styled from 'styled-components'

export const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const Tr = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.decorativeBorders};
`

export const Thead = styled.thead`
  tr {
    border-top: 0;
  }
`

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.spacing8};
`

export const Th = styled.td`
  padding: ${({ theme }) => theme.spacing.spacing8};
  text-align: left;
`
