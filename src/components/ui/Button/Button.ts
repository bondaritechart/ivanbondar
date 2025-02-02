'use client'

import * as variants from 'components/ui/Button/variants'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Theme } from 'theme'

interface ButtonProps {
  variant?: keyof typeof variants
  radius?: keyof Theme['radius']
  width?: string
  href?: HTMLAnchorElement['href']
  target?: HTMLAnchorElement['target']
}

export const Button = styled(motion.button)<ButtonProps>`
  border-radius: ${({ radius = 'radius16', theme }) => theme.radius[radius]};
  padding: ${({ theme }) => `${theme.spacing.spacing16} ${theme.spacing.spacing24}`};
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  ${({ width }) => width && { width: width }}
  ${({ variant }) => variants[variant || 'primary']}
`
