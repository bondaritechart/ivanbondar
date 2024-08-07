import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation SignUp($input: CreateUserInput!) {
    signUp(input: $input) {
      accessToken
      refreshToken
      user {
        id
        email
        role
      }
    }
  }
`
