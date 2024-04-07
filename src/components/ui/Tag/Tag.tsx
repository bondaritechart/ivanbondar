import { PropsWithChildren } from 'react'

import { Box } from 'components/ui/Box/Box'
import { Text } from 'components/ui/Text/Text'

interface TagProps extends PropsWithChildren {}

export const Tag = ({ children }: TagProps) => {
  return (
    <Box radius="radius24" padding={['spacing4', 'spacing12']} background="nonDecorativeBorders">
      <Text type="small" color="mainBackground">
        {children}
      </Text>
    </Box>
  )
}
