'use client'

import styled from 'styled-components'

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing16};
  li {
    margin: 0;
    padding: 0;
  }
`
