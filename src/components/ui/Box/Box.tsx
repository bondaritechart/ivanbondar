'use client'

import { getPaddingString, getSpacings } from 'components/ui/utils'
import styled, { DefaultTheme } from 'styled-components'
import { Spacing } from 'theme'

export type Padding = Spacing | Spacing[]

export interface BoxProps {
  padding?: Padding
  border?: boolean
  radius?: keyof DefaultTheme['radius']
  width?: number
  height?: number
  borderColor?: keyof DefaultTheme['colors']
  background?: keyof DefaultTheme['colors']
}

export const Box = styled.div<BoxProps>`
  ${({ theme, padding }) => padding && getPaddingString(getSpacings(padding, theme))}
  ${({ border }) => border && `border: 1px solid;`}
  ${({ radius, theme }) => radius && `border-radius: ${theme.radius[radius]};`}
  ${({ background, theme }) => background && `background: ${theme.colors[background]};`}
  ${({ borderColor, theme }) => borderColor && `border-color: ${theme.colors[borderColor]};`}
  ${({ width }) => width && `width: ${width}rem;`}
  ${({ height }) => height && `height: ${height}rem;`}
`
