import { css } from 'styled-components'

export const primary = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainBackground};
  border: 0;
  &:hover {
    background: #8d33ff;
  }
  &:active {
    background: #7129cc;
    box-shadow: 2px 2px 4px 0px rgba(34, 20, 51, 0.24) inset;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
  }
`
export const transparent = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.secondaryText};
  &:hover {
    background: ${({ theme }) => theme.colors.mainBackground};
  }
`
