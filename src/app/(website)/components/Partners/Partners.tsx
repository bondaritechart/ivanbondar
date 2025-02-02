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
    label: 'Elemy',
  },
  {
    img: coverwallet,
    label: 'Coverwallet',
  },
  {
    img: keeps,
    label: 'Keeps',
  },
  {
    img: popsa,
    label: 'Popsa',
  },
]

const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      staggerChildren: 0.3,
      ease: [0.02, 0.6, 0.01, 0.91],
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.02, 0.6, 0.01, 0.91],
    },
  },
}

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
        variants={frameVariants}
        initial="hidden"
        animate="visible"
      >
        {PARTNERS.map(({ img, label }) => (
          <Image
            variants={itemVariants}
            alt={label}
            key={label}
            src={img.src}
            width={img.width}
            height={isSmall ? 35 : img.height}
          />
        ))}
      </Flex>
    </Stack>
  )
}
