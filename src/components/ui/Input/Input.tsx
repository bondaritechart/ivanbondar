'use client'

import { ForwardedRef, forwardRef } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { StyledInput } from 'components/ui/Input/Input.styles'
import { Stack } from 'components/ui/Stack/Stack'
import { Text } from 'components/ui/Text/Text'

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: UseFormRegister<T>
}

export const Input = forwardRef(
  <T extends FieldValues>(
    { label, register, required, ...props }: InputProps<T>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label>
        <Stack gap="spacing4">
          <Text type="body">{label}</Text>
          <StyledInput {...register(props.name as any, { required })} {...props} ref={ref} />
        </Stack>
      </label>
    )
  },
)
