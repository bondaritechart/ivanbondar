'use client'

import { useEffect } from 'react'

import { AnalyticsEvents } from 'constants/analytics'
import { useAnalyticsEvent } from 'hooks/useAnalyticsEvent'
import { usePathname } from 'next/navigation'

export const PageViewTracker = () => {
  const pathname = usePathname()
  const { triggerEvent } = useAnalyticsEvent()
  useEffect(() => {
    triggerEvent({ event: AnalyticsEvents.PAGE_VIEW, data: { pathname } })
  }, [pathname])

  return <></>
}
