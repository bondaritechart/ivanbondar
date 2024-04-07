import React from 'react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends NextLinkProps {
  children: string | React.ReactNode
  target?: HTMLAnchorElement['target']
}

export const Link = ({ children, ...rest }: LinkProps) => {
  return <NextLink {...rest}>{children}</NextLink>
}
