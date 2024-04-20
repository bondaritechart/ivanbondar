'use client'

import { Flex, Image, Stack, Text } from 'components/ui'
import { useMediaQuery } from 'hooks/useMediaQuery'

import coverwallet from 'assets/images/partners/coverwallet.svg'
import elemy from 'assets/images/partners/elemy.svg'
import itechart from 'assets/images/partners/itechart.svg'
import keeps from 'assets/images/partners/keeps.svg'
import popsa from 'assets/images/partners/popsa.svg'

const PARTNERS = [
  {
    img: itechart,
    label: 'iTechArt',
  },
  {
    img: elemy,
    label: 'iTechArt',
  },
  {
    img: coverwallet,
    label: 'iTechArt',
  },
  {
    img: keeps,
    label: 'iTechArt',
  },
  {
    img: popsa,
    label: 'iTechArt',
  },
]

export const Partners = () => {
  const { isSmall } = useMediaQuery()

  return (
    <Stack gap="spacing32">
      <Text as="h3" align="center" type="heading3">
        Some companies I&apos;ve worked with
      </Text>
      <Flex
        gap={isSmall ? 'spacing24' : undefined}
        align="center"
        justify={isSmall ? 'space-around' : 'space-between'}
        wrap="wrap"
      >
        {PARTNERS.map(({ img, label }) => (
          <Image alt={label} key={label} src={img.src} width={img.width} height={isSmall ? 35 : img.height} />
        ))}
      </Flex>
    </Stack>
  )
}
