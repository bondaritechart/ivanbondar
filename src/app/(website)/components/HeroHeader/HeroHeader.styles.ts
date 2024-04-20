'use client'

import { Stack } from 'components/ui'
import styled from 'styled-components'
import { largeDevice } from 'theme'

export const CopyWrapper = styled(Stack)`
  ${largeDevice} {
    max-width: 600px;
  }
`
