import { Box, Flex, Text } from 'components/ui'

export const Footer = () => {
  return (
    <footer>
      <Box padding={['spacing0', 'spacing0', 'spacing16']}>
        <Flex justify="center" gap="spacing16">
          <Text>Webwizart</Text>
          <Text>All rights reserved</Text>
          <Text>2024</Text>
        </Flex>
      </Box>
    </footer>
  )
}
