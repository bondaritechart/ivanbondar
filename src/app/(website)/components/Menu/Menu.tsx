'use client'

import { useState } from 'react'

import { Hamburger, LinksWrapper, List, MenuWrapper } from 'app/(website)/components/Menu/Menu.styles'
import { Button, Flex, Image, Link } from 'components/ui'
import { Routes } from 'constants/routes'
import { useMediaQuery } from 'hooks/useMediaQuery'

import Logo from 'assets/images/logo.svg'

interface MenuProps {
  links: Array<{
    label: string
    href: string
    target?: string
  }>
  homepageLink?: string
}

export const Menu = ({ links, homepageLink }: MenuProps) => {
  const { isSmall } = useMediaQuery()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MenuWrapper
      padding={isSmall ? ['spacing24', 'spacing0'] : ['spacing24', 'spacing56']}
      radius={isSmall ? undefined : 'radius48'}
      background={isSmall ? 'mainBackground' : 'alternativeBackground04'}
      borderColor="decorativeBorders"
      $border={!isSmall}
    >
      <nav>
        <Flex justify="space-between" align="center">
          <Link href={homepageLink || Routes.ROOT}>
            <Image src={Logo.src} width={Logo.width} height={Logo.height} alt="logo" />
          </Link>
          <LinksWrapper active={isMenuOpen} gap="spacing16" align="center">
            {isSmall && (
              <Hamburger inverse active={isMenuOpen} onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                <span />
                <span />
                <span />
              </Hamburger>
            )}
            <List>
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href} target={link.target}>
                      <Button onClick={() => setIsMenuOpen(false)} variant="transparent">
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </List>
            {!isSmall && (
              <Button as="a" href="#get-in-touch">
                Get in Touch
              </Button>
            )}
          </LinksWrapper>
          {isSmall && (
            <Hamburger active={isMenuOpen} onClick={() => setIsMenuOpen((prevState) => !prevState)}>
              <span />
              <span />
              <span />
            </Hamburger>
          )}
        </Flex>
      </nav>
    </MenuWrapper>
  )
}
