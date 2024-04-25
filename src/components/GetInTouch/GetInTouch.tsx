'use client'

import { Flex, Stack, Text } from 'components/ui'
import { IconLink } from 'components/ui/IconLink/IconLink'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { Email } from 'components/ui/icons/Email'
import { Github } from 'components/ui/icons/Github'
import { LinkedIn } from 'components/ui/icons/LinkedIn'
import { Whatsapp } from 'components/ui/icons/Whatsapp'
import { useMediaQuery } from 'hooks/useMediaQuery'

const GET_IN_TOUCH_LINKS = [
  {
    icon: <Email />,
    href: 'mailto:ivanbondar133@gmail.com',
    title: 'Send me an email',
  },
  {
    icon: <Github />,
    href: 'https://github.com/bondaritechart',
    title: 'Check out my GitHub profile',
  },
  {
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/ivan-bondar-009456a7/',
    title: 'Connect with me on LinkedIn',
  },
  {
    icon: <Whatsapp />,
    href: 'https://wa.me/359882436431',
    title: 'Send me a message on WhatsApp',
  },
]

export const GetInTouch = () => {
  const { isSmall } = useMediaQuery()

  return (
    <WidgetWrapper
      padding={isSmall ? ['spacing56', 'spacing24'] : 'spacing56'}
      height={isSmall ? 'auto' : 56}
      id="get-in-touch"
    >
      <Flex
        direction={isSmall ? 'column' : 'row'}
        align={isSmall ? 'flex-start' : 'flex-end'}
        gap="spacing48"
        template={[1, 1]}
      >
        <Stack gap="spacing24">
          <Text type="heading1" color="headingText">
            Get in Touch
          </Text>
          <Text>
            Feel free to reach out. I&apos;m always happy to chat and discuss ideas, feasibility, schedule, and other
            related topics. If you have any questions or just want to say hi, that&apos;s cool too.
          </Text>
        </Stack>
        <Flex wrap={isSmall ? 'wrap' : 'nowrap'} justify={isSmall ? 'flex-start' : 'flex-end'} gap="spacing16">
          {GET_IN_TOUCH_LINKS.map((props) => (
            <IconLink key={props.href} target="_blank" {...props} />
          ))}
        </Flex>
      </Flex>
    </WidgetWrapper>
  )
}
