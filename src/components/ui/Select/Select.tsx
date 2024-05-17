'use client'

import { StyledSelect } from 'components/ui/Select/Select.styles'
import { Stack } from 'components/ui/Stack/Stack'
import { Text } from 'components/ui/Text/Text'

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

export const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <label>
      <Stack gap="spacing4">
        <Text type="body">{label}</Text>
        <StyledSelect {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </Stack>
    </label>
  )
}
