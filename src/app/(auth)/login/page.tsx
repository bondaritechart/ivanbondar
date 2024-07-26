'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Flex, Stack } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { register, handleSubmit } = useForm()

  const onLogin = async (data) => {
    log
  }

  return (
    <Flex>
      <WidgetWrapper width={48} padding="spacing24" radius="radius16">
        <form action="" onSubmit={onLogin}>
          <Stack gap="spacing16" />
        </form>
      </WidgetWrapper>
    </Flex>
  )
}
