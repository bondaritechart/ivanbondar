'use client'

import styled from 'styled-components'

export const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.spacing8};
`
