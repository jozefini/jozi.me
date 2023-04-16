import { RefObject, useEffect } from 'react'

interface HookProps<T extends HTMLElement> {
  ref: RefObject<T>
  handler: (event: MouseEvent | TouchEvent) => void
}

export function useOnClickOutside<T extends HTMLElement>({ ref, handler }: HookProps<T>) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
