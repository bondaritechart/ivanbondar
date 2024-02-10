'use client'

import * as variants from 'components/ui/Button/variants'
import styled from 'styled-components'
import { Theme } from 'theme'

interface ButtonProps {
  variant?: keyof typeof variants
  radius?: keyof Theme['radius']
}

export const Button = styled.button<ButtonProps>`
  border-radius: ${({ radius = 'radius16', theme }) => theme.radius[radius]};
  padding: ${({ theme }) => `${theme.spacing.spacing16} ${theme.spacing.spacing24}`};
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  border: 0;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none !important;
  ${({ variant }) => variants[variant || 'primary']}
`
