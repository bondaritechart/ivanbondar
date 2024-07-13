import { PropsWithChildren, useState } from 'react'

import { Flex, Text } from 'components/ui'

interface CheckboxProps extends PropsWithChildren {
  id: string
  name: string
  defaultChecked?: boolean
  onChange: (checked: boolean) => void
}

export const Checkbox = ({ onChange, id, name, children, defaultChecked = false }: CheckboxProps) => {
  // state
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <Flex gap="spacing4" align="center">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={() => {
          setChecked(!checked)
          onChange(!checked)
        }}
      />
      <label htmlFor={id} className="ml-1">
        <Text>{children}</Text>
      </label>
    </Flex>
  )
}
