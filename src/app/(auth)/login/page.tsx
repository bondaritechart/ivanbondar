'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Center, Input, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { register, handleSubmit } = useForm()

  const onLogin = async (data: any) => {
    try {
      await signIn('credentials', {
        username: data.username,
        password: data.password,
        redirect: false,
      })
    } catch (error) {
      console.error('Sign in failed', error)
    }
  }

  return (
    <Center>
      <Stack gap="spacing12">
        <Text type="heading2">Sign In</Text>
        <WidgetWrapper width={48} padding="spacing48" radius="radius16">
          <form onSubmit={handleSubmit(onLogin)}>
            <Stack gap="spacing16">
              <Input {...register('username')} label="Login" />
              <Input {...register('password')} label="Password" type="password" />
              <Button type="submit">Sign In</Button>
            </Stack>
          </form>
        </WidgetWrapper>
      </Stack>
    </Center>
  )
}
