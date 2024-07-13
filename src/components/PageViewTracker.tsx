'use client'

import { useEffect } from 'react'

import { useAnalyticsEvent } from 'hooks/useAnalyticsEvent'
import { usePathname } from 'next/navigation'

export const PageViewTracker = () => {
  const pathname = usePathname()
  const { triggerEvent } = useAnalyticsEvent()
  useEffect(() => {
    const timer = setTimeout(() => {
      // triggerEvent({ event: AnalyticsEvents.PAGE_VIEW, data: { pathname } })
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

  return <></>
}
