import { gql } from '@apollo/client'
import { ANALYTICS_EVENT_FRAGMENT } from 'app/graphql/fragments/AnalyticsEventFragment'

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    events {
      ...AnalyticsEventFragment
    }
  }
  ${ANALYTICS_EVENT_FRAGMENT}
`
