'use client'

import { CopyWrapper } from 'app/(website)/components/HeroHeader/HeroHeader.styles'
import { Flex, Image, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { useMediaQuery } from 'hooks/useMediaQuery'

import heroImg from 'assets/images/hero-img.svg'

export const HeroHeader = () => {
  const { isSmall } = useMediaQuery()

  return (
    <WidgetWrapper height={isSmall ? 'auto' : 64} padding={isSmall ? ['spacing40', 'spacing24'] : 'spacing56'}>
      <Flex
        direction={isSmall ? 'column-reverse' : 'row'}
        justify="space-between"
        align={isSmall ? 'flex-start' : 'flex-end'}
        gap="spacing24"
      >
        <CopyWrapper gap="spacing24">
          <Stack gap="spacing8">
            <Text as="h1" color="headingText" type={isSmall ? 'heading2' : 'heading1'}>
              Welcome to the world of digital possibilities!
            </Text>
          </Stack>
          <Text>
            I am Ivan Bondar, a Full-Stack developer with rich experience and a passion for creating innovative web
            applications. My creed is to combine creativity and technical expertise to achieve your goals.
          </Text>
        </CopyWrapper>
        <Flex alignSelf={isSmall ? 'center' : undefined}>
          <Image
            responsive={isSmall}
            src={heroImg.src}
            width={heroImg.width}
            height={heroImg.height}
            alt="hero-image"
          />
        </Flex>
      </Flex>
    </WidgetWrapper>
  )
}
