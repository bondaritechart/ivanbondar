'use client'

import { ForwardedRef, forwardRef } from 'react'

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

export const Select = forwardRef(({ label, options, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <label>
      <Stack gap="spacing4">
        <Text type="body">{label}</Text>
        <StyledSelect ref={ref} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </Stack>
    </label>
  )
})
