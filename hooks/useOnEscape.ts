import { useEffect } from 'react'

export function useOnEscape(handler: () => void) {
  useEffect(() => {
    const eventHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler()
      }
    }
    document.addEventListener('keydown', eventHandler)
    return () => document.removeEventListener('keydown', eventHandler)
  }, [handler])
}
