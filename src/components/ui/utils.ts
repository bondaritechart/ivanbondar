import { Spacing, Theme } from 'theme'

export const getSpacings = (padding: Spacing | Spacing[], theme: Theme) => {
  if (Array.isArray(padding)) {
    return padding.map((p) => theme.spacing[p])
  }

  return theme.spacing[padding]
}

export const getPaddingString = (paddings: string | string[]): string => {
  if (typeof paddings === 'string') {
    return `padding: ${paddings}; --container-padding-x: ${paddings}; --container-padding-y: ${paddings};`
  }

  return `padding: ${paddings.join(' ')}; --container-padding-x: ${paddings[1]}; --container-padding-y: ${paddings[0]};`
}
