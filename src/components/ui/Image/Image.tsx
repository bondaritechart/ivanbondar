import React from 'react'

import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface ImageProps extends NextImageProps {}

export const Image = (props: ImageProps) => {
  return <NextImage {...props} />
}
