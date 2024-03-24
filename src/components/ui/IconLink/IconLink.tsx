import React from 'react'

import { Box } from 'components/ui/Box/Box'
import styled from 'styled-components'

interface IconLinkProps {
  icon: React.ReactNode
  href: string
  target?: HTMLAnchorElement['target']
}

const LinkStyled = styled(Box)`
  transition: all 0.2s ease-in-out;
  &:hover {
    background: white;
  }
`

export const IconLink = ({ icon, ...rest }: IconLinkProps) => {
  return (
    <LinkStyled as="a" {...rest} radius="radius16" padding={['spacing8', 'spacing24']} borderColor="primary" border>
      {icon}
    </LinkStyled>
  )
}
