'use client'

import { CopyWrapper } from 'app/(website)/components/HeroHeader/HeroHeader.styles'
import { Flex, Image, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'

import heroImg from 'assets/images/hero-img.svg'

export const HeroHeader = () => {
  return (
    <WidgetWrapper height={64} padding="spacing56">
      <Flex justify="space-between" align="flex-end">
        <CopyWrapper gap="spacing24">
          <Stack gap="spacing8">
            <Text type="body">Hey, I&apos;m Ivan</Text>
            <Text as="h1" color="headingText" type="heading1">
              Welcome to the world of digital possibilities!
            </Text>
          </Stack>
          <Text>
            I am Ivan Bondar, a Full-Stack developer with rich experience and a passion for creating innovative web
            applications. My creed is to combine creativity and technical expertise to achieve your goals.
          </Text>
        </CopyWrapper>
        <Stack>
          <Image src={heroImg.src} width={heroImg.width} height={heroImg.height} alt="hero-image" />
        </Stack>
      </Flex>
    </WidgetWrapper>
  )
}
