'use client'

import { useState } from 'react'

import { Flex, Stack } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async (e: any) => {
    e.preventDefault()
    await signIn('credentials', {
      username,
      password,
      redirect: false,
    })
  }

  return (
    <Flex>
      <WidgetWrapper width={34} padding="spacing56">
        <form action="" onSubmit={onLogin}>
          <Stack gap="spacing16">
            <label htmlFor="">
              <p>Username</p>
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
            </label>
            <label htmlFor="">
              <p>password</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </label>
            <button type="submit">Login</button>
          </Stack>
        </form>
      </WidgetWrapper>
    </Flex>
  )
}
