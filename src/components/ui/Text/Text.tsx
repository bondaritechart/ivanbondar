'use client'

import { CSSProperties } from 'react'

import styled, { DefaultTheme } from 'styled-components'
import * as textTypes from 'theme/typography'
import { inter } from 'utils/fonts'

export interface TextProps {
  type?: keyof typeof textTypes
  color?: keyof DefaultTheme['colors']
  align?: CSSProperties['textAlign']
  transform?: CSSProperties['textTransform']
}

export const Text = styled.p<TextProps>`
  ${({ type }) => textTypes[type || 'body']}
  color: ${({ color, theme }) => theme.colors[color || 'secondaryText']};
  font-family: ${inter.style.fontFamily};
  ${({ align }) => align && `text-align: ${align};`}
  ${({ transform }) => transform && `text-transform: ${transform};`}
`
