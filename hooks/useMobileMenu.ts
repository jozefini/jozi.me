import { shallow } from 'zustand/shallow'
import { useAppStore } from 'stores/useAppStore'

export function useMobileMenu() {
  const [isOpen, openMenu, closeMenu, toggleMenu] = useAppStore(
    (s) => [s.isMenuOpen, s.openMenu, s.closeMenu, s.toggleMenu],
    shallow
  )

  return { isOpen, openMenu, closeMenu, toggleMenu }
}
