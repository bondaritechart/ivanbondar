'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { CookiesNames } from 'constants/cookies'
import Cookies from 'js-cookie'

function makeClient(authMiddleware: ApolloLink | null) {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SCHEMA_PATH,
  })

  if (!authMiddleware) {
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === 'undefined'
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              httpLink,
            ])
          : httpLink,
    })
  }

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            authMiddleware,
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : ApolloLink.from([authMiddleware, httpLink]),
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const authMiddleware = setContext((operation, { headers }) => {
    const token = Cookies.get(CookiesNames.AUTH_TOKEN)
    console.log('token', token)

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  return <ApolloNextAppProvider makeClient={() => makeClient(authMiddleware)}>{children}</ApolloNextAppProvider>
}
