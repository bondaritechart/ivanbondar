import { light } from 'theme/palette'

export const theme = {
  colors: light,
  spacing: {
    spacing0: '0rem',
    spacing4: '0.4rem',
    spacing8: '0.8rem',
    spacing12: '1.2rem',
    spacing16: '1.6rem',
    spacing24: '2.4rem',
    spacing32: '3.2rem',
    spacing48: '4.8rem',
    spacing56: '5.6rem',
    spacing96: '9.6rem',
    spacing120: '12rem',
  },
  radius: {
    radius16: '1.6rem',
  },
}

export type Theme = typeof theme

export type Spacing = keyof typeof theme.spacing