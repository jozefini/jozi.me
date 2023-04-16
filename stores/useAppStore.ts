import { create } from 'zustand'

interface AppStore {
  isMenuOpen: boolean
  translate: { [key: string]: string }
  setTranslate: (translate: { [key: string]: string }) => void
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  isMenuOpen: false,
  translate: {},
  setTranslate: (translate) => set(() => ({ translate })),
  openMenu: () => set(() => ({ isMenuOpen: true })),
  closeMenu: () => set(() => ({ isMenuOpen: false })),
  toggleMenu: () => set(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen })),
}))
