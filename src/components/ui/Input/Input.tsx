'use client'

import { StyledInput } from 'components/ui/Input/Input.styles'
import { Stack } from 'components/ui/Stack/Stack'
import { Text } from 'components/ui/Text/Text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label>
      <Stack gap="spacing4">
        <Text type="body">{label}</Text>
        <StyledInput {...props} />
      </Stack>
    </label>
  )
}
