'use client'

import { CSSProperties } from 'react'

import { getSpacings } from 'components/ui/utils'
import styled, { css } from 'styled-components'
import { Spacing } from 'theme'

const createTemplate = (values: Array<number | string>, templateRepeat: string) => {
  let styles = ''
  const { length } = values
  const nValue = templateRepeat === 'last' ? '' : String(length)
  for (let i = 0; i < length; i++) {
    styles += `
      > :nth-child(${nValue}n + ${i + 1}) {
        flex: ${values[i]};
      }
    `
  }

  return css`
    ${styles}
  `
}

export interface FlexProps {
  direction?: CSSProperties['flexDirection']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  flex?: CSSProperties['flex']
  wrap?: CSSProperties['flexWrap']
  gap?: Spacing
  template?: Array<number | string>
  templateRepeat?: 'last' | 'group'
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ gap, theme }) => gap && `gap: ${getSpacings(gap, theme)};`};
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ template, templateRepeat }) => template && createTemplate(template, templateRepeat || 'group')};
`
