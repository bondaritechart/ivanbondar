'use client'

import styled from 'styled-components'

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: ${({ theme }) => theme.radius['radius16']};
  padding: ${({ theme }) => `${theme.spacing.spacing16} ${theme.spacing.spacing24}`};
`
