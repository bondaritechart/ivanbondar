'use client'

import { Flex } from 'components/ui'
import { Box } from 'components/ui/Box/Box'
import styled from 'styled-components'
import { smallDevice } from 'theme'

export const MenuWrapper = styled(Box)`
  position: sticky;
  top: ${({ theme }) => theme.spacing.spacing48};
  left: 0;
  backdrop-filter: blur(4px);
  ${smallDevice} {
    backdrop-filter: none;
    top: 0;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing16};
  ${smallDevice} {
    flex-direction: column;
    a {
      color: ${({ theme }) => theme.colors.mainBackground};
      display: block;
      width: 100%;
    }
  }
  li {
    display: flex;
    align-items: center;
  }
`

export const LinksWrapper = styled(Flex)<{ active?: boolean }>`
  ${smallDevice} {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.headingText};
    align-items: center;
    justify-content: center;
    text-align: center;
    ${({ active }) => active && `visibility: visible; opacity: 1;`}
  }
`

export const Hamburger = styled.button<{ active?: boolean; inverse?: boolean }>`
  border: 0;
  background: transparent;
  appearance: none;
  ${smallDevice} {
    display: flex;
    width: 40px;
    padding: 5px;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.spacing4};
    cursor: pointer;
    ${({ inverse }) => inverse && `position: absolute; top: 20px; right: 20px;`}
  }
    
  span {
    display: inline-block;
    height: 0.3rem;
    border-radius: 5px;
      width: 100%;
    background: ${({ theme, inverse }) => (inverse ? theme.colors.secondaryText : theme.colors.headingText)};
    transition: 0.3s;
    ${({ active }) =>
      active &&
      `
      &:first-child {
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
      }
      &:last-child {
        transform: rotate(-45deg) translate(0.5rem, -0.5rem);
      }
      &:nth-child(2) {
        opacity: 0;
      }
    `}
`
