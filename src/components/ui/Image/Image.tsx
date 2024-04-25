'use client'

import React from 'react'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import styled from 'styled-components'

interface ImageProps extends NextImageProps {
  responsive?: boolean
}

const ResponsiveWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`

export const Image = (props: ImageProps) => {
  if (props.responsive) {
    return (
      <ResponsiveWrapper>
        <NextImage {...props} />
      </ResponsiveWrapper>
    )
  }

  return <NextImage {...props} />
}
