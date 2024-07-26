import { gql } from '@apollo/client'

export const ANALYTICS_EVENT_FRAGMENT = gql`
  fragment AnalyticsEventFragment on AnalyticsEvent {
    id
    event
    uuid
  }
`
