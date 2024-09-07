'use client'

import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import axios from 'axios'
import { Button, Center, Input, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { CookiesNames } from 'constants/cookies'
import { AdminRoutes, ApiRoutes } from 'constants/routes'
import Cookies from 'js-cookie'
import { AuthContext } from 'lib/auth/AuthContext'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { setAuth } = useContext(AuthContext)
  const router = useRouter()
  const onLogin = async (data: any) => {
    try {
      const user = await axios.post(process.env.NEXT_PUBLIC_API_URL + ApiRoutes.SIGN_IN, data)
      setAuth(user.data)
      Cookies.set(CookiesNames.AUTH_TOKEN, user.data.accessToken, {
        secure: true,
        sameSite: 'strict',
        expires: 20,
      })
      router.push(AdminRoutes.ADMIN)
    } catch (error) {
      console.log('Sign in failed', error)
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
