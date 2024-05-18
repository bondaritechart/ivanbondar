'use client'

import { ForwardedRef, forwardRef } from 'react'

import { StyledInput } from 'components/ui/Input/Input.styles'
import { Stack } from 'components/ui/Stack/Stack'
import { Text } from 'components/ui/Text/Text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = forwardRef(({ label, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <label>
      <Stack gap="spacing4">
        <Text type="body">{label}</Text>
        <StyledInput ref={ref} {...props} />
      </Stack>
    </label>
  )
})
