'use client'

import { List, MenuWrapper } from 'app/(website)/components/Menu/Menu.styles'
import { Button, Flex, Image, Link } from 'components/ui'
import { Routes } from 'constants/routes'

import Logo from 'assets/images/logo.svg'

const LINKS = [
  {
    href: Routes.CV,
    label: 'CV',
  },
  {
    href: Routes.PORTFOLIO,
    label: 'Portfolio',
  },
  {
    href: Routes.ABOUT,
    label: 'About me',
  },
]

export const Menu = () => {
  return (
    <MenuWrapper
      padding={['spacing24', 'spacing56']}
      radius="radius48"
      background="alternativeBackground04"
      borderColor="decorativeBorders"
      border
    >
      <nav>
        <Flex justify="space-between" align="center">
          <Link href={Routes.ROOT}>
            <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo" />
          </Link>
          <Flex gap="spacing16" align="center">
            <List>
              {LINKS.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <Button variant="transparent">{link.label}</Button>
                    </Link>
                  </li>
                )
              })}
            </List>
            <Button as="a" href="#get-in-touch">
              Get in Touch
            </Button>
          </Flex>
        </Flex>
      </nav>
    </MenuWrapper>
  )
}
