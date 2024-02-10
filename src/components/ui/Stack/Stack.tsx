'use client'

import { Flex, FlexProps } from 'components/ui/Flex/Flex'
import { getSpacings } from 'components/ui/utils'
import styled from 'styled-components'

interface StackProps {
  gap?: FlexProps['gap']
  align?: FlexProps['align']
}

export const Stack = styled(Flex)<StackProps>`
  flex-direction: column;
  gap: ${({ gap, theme }) => getSpacings(gap || 'spacing0', theme)};
`
