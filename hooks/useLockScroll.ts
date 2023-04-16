import { useEffect } from 'react'

export function useLockScroll(condition: boolean = true) {
  useEffect(() => {
    document.body.style.overflow = condition ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [condition])
}
