import create from 'zustand'

type AppStore = {
  isMenuOpen: boolean,
}

const useStore = create<{
  isMenuOpen: boolean
  isHeaderHidden: boolean
  showHeader: () => void
  hideHeader: () => void
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}>((set) => ({
  isMenuOpen: false,
  isHeaderHidden: false,
  showHeader: () => set(() => ({ isHeaderHidden: false })),
  hideHeader: () => set(() => ({ isHeaderHidden: true })),
  openMenu: () => set(() => ({ isMenuOpen: true })),
  closeMenu: () => set(() => ({ isMenuOpen: false })),
  toggleMenu: () => set(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen })),
}))

export default useStore
