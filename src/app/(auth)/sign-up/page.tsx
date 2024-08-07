'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useMutation } from '@apollo/client'
import { SIGN_UP } from 'app/graphql/auth/mutations/SignUp'
import { Button, Center, Input, Stack, Text } from 'components/ui'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const [signUp, mutationData] = useMutation(SIGN_UP)
  const onSignUp = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      console.error('Passwords do not match')

      return
    }
    await signUp({
      variables: {
        input: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      },
    })
  }

  useEffect(() => {
    if (mutationData.data) {
      console.log('User signed up', mutationData.data)
    }
  }, [mutationData.data])

  return (
    <Center>
      <Stack gap="spacing12">
        <Text type="heading2">Sign Up</Text>
        <WidgetWrapper width={48} padding="spacing48" radius="radius16">
          <form onSubmit={handleSubmit(onSignUp)}>
            <Stack gap="spacing16">
              <Input {...register('email')} label="Email" />
              <Input {...register('name')} label="Name" />
              <Input {...register('password')} label="Password" type="password" />
              <Input {...register('confirmPassword')} label="Confirm Password" type="password" />
              <Button type="submit">Sign Up</Button>
            </Stack>
          </form>
        </WidgetWrapper>
      </Stack>
    </Center>
  )
}
