'use client'

import { getPaddingString, getSpacings } from 'components/ui/utils'
import { motion } from 'framer-motion'
import styled, { DefaultTheme } from 'styled-components'
import { Spacing } from 'theme'

export type Padding = Spacing | Spacing[]

export interface BoxProps {
  padding?: Padding
  $border?: boolean
  radius?: keyof DefaultTheme['radius']
  width?: number | string
  minWidth?: number | string
  height?: number | string
  borderColor?: keyof DefaultTheme['colors']
  background?: keyof DefaultTheme['colors']
}

export const Box = styled(motion.div)<BoxProps>`
  ${({ theme, padding }) => padding && getPaddingString(getSpacings(padding, theme))}
  ${({ $border }) => $border && `border: 1px solid;`}
  ${({ radius, theme }) => radius && `border-radius: ${theme.radius[radius]};`}
  ${({ background, theme }) => background && `background: ${theme.colors[background]};`}
  ${({ borderColor, theme }) => borderColor && `border-color: ${theme.colors[borderColor]};`}
  ${({ width }) => (width ? (typeof width === 'number' ? `width: ${width}rem;` : `width: ${width};`) : '')}
  ${({ minWidth }) =>
    minWidth ? (typeof minWidth === 'number' ? `min-width: ${minWidth}rem;` : `min-width: ${minWidth};`) : ''}
  ${({ height }) => (height ? (typeof height === 'number' ? `height: ${height}rem;` : `height: ${height};`) : '')}
`
