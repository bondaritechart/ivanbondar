import { useEffect, useState } from 'react'

import { theme } from 'theme'

const useMedia = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handleChange = () => {
      setMatches(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

export const useMediaQuery = () => {
  const isMobile = useMedia(`(max-width: ${theme.breakpoints.mobile}px)`)
  const isTablet = useMedia(
    `(min-width: ${theme.breakpoints.tablet}px) and (max-width: ${theme.breakpoints.desktop - 1}px)`,
  )
  const isDesktop = useMedia(
    `(min-width: ${theme.breakpoints.desktop}px) and (max-width: ${theme.breakpoints.desktopLarge - 1}px)`,
  )
  const isDesktopLarge = useMedia(`(min-width: ${theme.breakpoints.desktopLarge}px)`)

  return {
    isMobile,
    isDesktop,
    isTablet,
    isDesktopLarge,
    isSmall: isMobile || isTablet,
  }
}
