import { Flex, Image, Stack, Text } from 'components/ui'

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
  return (
    <Stack gap="spacing32">
      <Text as="h3" align="center" type="heading3">
        Some companies I&apos;ve worked with
      </Text>
      <Flex align="center" justify="space-between" wrap="wrap">
        {PARTNERS.map(({ img, label }) => (
          <Image alt={label} key={label} src={img.src} width={img.width} height={img.height} />
        ))}
      </Flex>
    </Stack>
  )
}
