'use client'

import React from 'react'

import { HTMLMotionProps, motion } from 'framer-motion'
// import { ImageProps as NextImageProps } from 'next/image'
import styled from 'styled-components'

interface ImageProps extends HTMLMotionProps<'img'> {
  responsive?: boolean
}

const ResponsiveWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`

const AnimatedImg = motion.img

export const Image = ({ responsive, ...props }: ImageProps) => {
  if (responsive) {
    return (
      <ResponsiveWrapper>
        <AnimatedImg {...props} />
      </ResponsiveWrapper>
    )
  }

  return <AnimatedImg {...props} />
}
