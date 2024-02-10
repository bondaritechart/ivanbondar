'use client'

import { CSSProperties } from 'react'

import { getSpacings } from 'components/ui/utils'
import styled from 'styled-components'
import { Spacing } from 'theme'

export interface FlexProps {
  direction?: CSSProperties['flexDirection']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  flex?: CSSProperties['flex']
  wrap?: CSSProperties['flexWrap']
  gap?: Spacing
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ gap, theme }) => gap && `gap: ${getSpacings(gap, theme)};`};
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`
