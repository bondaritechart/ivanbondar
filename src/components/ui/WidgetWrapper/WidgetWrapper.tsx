'use client'

import { Box } from 'components/ui/Box/Box'
import styled from 'styled-components'

export const WidgetWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

WidgetWrapper.defaultProps = {
  $border: true,
  borderColor: 'decorativeBorders',
  background: 'alternativeBackground',
  radius: 'radius48',
}
