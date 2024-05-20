import { gql } from '@apollo/client'

export const CREATE_ANALYTICS_EVENT = gql`
  mutation CreateAnalyticsEvent($input: CreateAnalyticsInput!) {
    createAnalyticsEvent(input: $input) {
      id
      event
      uuid
    }
  }
`
