import { Flex, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'

export const GetInTouch = () => {
  return (
    <WidgetWrapper padding="spacing56" height={48}>
      <Flex>
        <Stack gap="spacing24">
          <Text type="heading2">Get in Touch</Text>
          <Text>
            Feel free to reach out. I'm always happy to chat and discuss ideas, feasibility, schedule, and other related
            topics. If you have any questions or just want to say hi, that's cool too.
          </Text>
        </Stack>
        <Flex>asd</Flex>
      </Flex>
    </WidgetWrapper>
  )
}
