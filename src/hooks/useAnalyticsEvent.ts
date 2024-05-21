import { useMutation } from '@apollo/client'
import { CREATE_ANALYTICS_EVENT } from 'app/graphql/analytics/CreateAnalyticsEvent'
import { AnalyticsEvents } from 'constants/analytics'
import { CookiesNames } from 'constants/cookies'
import { useCookies } from 'next-client-cookies'
import { CreateAnalyticsEventMutation, CreateAnalyticsEventMutationVariables } from 'typings/generated'

export const useAnalyticsEvent = () => {
  const [mutate] = useMutation<CreateAnalyticsEventMutation, CreateAnalyticsEventMutationVariables>(
    CREATE_ANALYTICS_EVENT,
  )
  const cookies = useCookies()

  const triggerEvent = ({ event, data }: { event: AnalyticsEvents; data?: Record<string, any> }) => {
    mutate({
      variables: {
        input: {
          event,
          data: data ? JSON.stringify(data) : '',
          path: window.location.pathname,
          referrer: document.referrer,
          ip: '127.0.0.1',
          userAgent: navigator.userAgent,
          uuid: cookies.get(CookiesNames.ANALYTICS_ID) || '',
        },
      },
    })
  }

  return { triggerEvent }
}
