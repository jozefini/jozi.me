import { useEffect, useState } from 'react'

type MatchOption = boolean | string | number
interface MediaQueryOptions {
  isMobile?: MatchOption
  isTablet?: MatchOption
  isDesktop?: MatchOption
}
const breakpoints = {
  tablet: 768,
  desktop: 1024,
}

export function useMediaQuery({ isMobile, isTablet, isDesktop }: MediaQueryOptions) {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryOptions>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useEffect(() => {
    const mobile = window.matchMedia(`(max-width: ${breakpoints.tablet - 1}px)`)
    const tablet = window.matchMedia(
      `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`
    )

    const watchMediaQueries = () => {
      const matchesMobile = mobile.matches
      const matchesTablet = tablet.matches
      const matchesDesktop = !matchesMobile && !matchesTablet
      setMediaQuery({
        isMobile: isMobile !== undefined && matchesMobile ? isMobile : matchesMobile,
        isTablet: isTablet !== undefined && matchesTablet ? isTablet : matchesTablet,
        isDesktop: isDesktop !== undefined && matchesDesktop ? isDesktop : matchesDesktop,
      })
    }
    watchMediaQueries()

    mobile.addEventListener('change', watchMediaQueries)
    tablet.addEventListener('change', watchMediaQueries)

    return () => {
      mobile.removeEventListener('change', watchMediaQueries)
      tablet.removeEventListener('change', watchMediaQueries)
    }
  }, [])

  return mediaQuery
}
