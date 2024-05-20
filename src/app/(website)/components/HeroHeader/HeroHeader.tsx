'use client'

import { useMutation } from '@apollo/client'
import { CopyWrapper } from 'app/(website)/components/HeroHeader/HeroHeader.styles'
import { CREATE_ANALYTICS_EVENT } from 'app/graphql/analytics/CreateAnalyticsEvent'
import { Flex, Image, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { CookiesNames } from 'constants/cookies'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useCookies } from 'next-client-cookies'
import { CreateAnalyticsEventMutation, CreateAnalyticsEventMutationVariables } from 'typings/generated'

import heroImg from 'assets/images/hero-img.svg'

export const HeroHeader = () => {
  const { isSmall } = useMediaQuery()
  const cookies = useCookies()
  console.log('document cookie', document.cookie)
  const [mutate, data] = useMutation<CreateAnalyticsEventMutation, CreateAnalyticsEventMutationVariables>(
    CREATE_ANALYTICS_EVENT,
  )

  const handleMutation = () => {
    mutate({
      variables: {
        input: {
          event: 'hero-header',
          data: JSON.stringify({ test: 'test' }),
          path: '/home',
          referrer: '/home',
          ip: '127.0.0.1',
          userAgent: navigator.userAgent,
          uuid: cookies.get(CookiesNames.ANALYTICS_ID) || '',
        },
      },
    })
  }

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
          <button onClick={handleMutation}>mutate</button>
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
