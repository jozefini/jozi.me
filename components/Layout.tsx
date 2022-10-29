// import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import useStore from '../lib/store'
import Header from './header/Header'
// import Footer from './footer/Footer'
// import Modal from './modal/Modal'

interface LayoutProps {
  children: ReactNode
}

const css = {
  wrapper: 'min-h-screen overflow-hidden',
}

export default function Layout({ children }: LayoutProps) {
  const isMenuOpen = useStore((state) => state.isMenuOpen)

  return (
    <div className={css.wrapper}>
      <Header />
      {children}
      {/* <Footer /> */}
      {/* <AnimatePresence mode="wait">{isMenuOpen && <Modal />}</AnimatePresence> */}
    </div>
  )
}
