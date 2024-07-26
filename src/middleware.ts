import { ApolloClient, InMemoryCache } from '@apollo/client'
import { CREATE_ANALYTICS_EVENT } from 'app/graphql/analytics/CreateAnalyticsEvent'
import { AnalyticsEvents } from 'constants/analytics'
import { CookiesNames } from 'constants/cookies'
import { type NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SCHEMA_PATH,
})

export async function middleware(request: NextRequest) {
  const analyticsId = request.cookies.get(CookiesNames.ANALYTICS_ID)
  const response = NextResponse.next()
  if (!analyticsId) {
    const id = uuidv4() // id of a new user session
    response.cookies.set(CookiesNames.ANALYTICS_ID, id, {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    })
    try {
      await client.mutate({
        mutation: CREATE_ANALYTICS_EVENT,
        variables: {
          input: {
            event: AnalyticsEvents.NEW_LEAD,
            data: JSON.stringify({}),
            path: request.nextUrl.pathname,
            referrer: request.headers.get('referer'),
            ip: request.headers.get('x-forwarded-for'),
            userAgent: request.headers.get('user-agent'),
            uuid: id,
          },
        },
      })
    } catch (e) {
      //eslint-disable-next-line
      console.log(e)
    }
  }

  return response
}
