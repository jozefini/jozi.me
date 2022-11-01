import { cn } from '../../lib/helpers'
import useStore from '../../lib/store'
import Brand from './Brand'
import Burger from './Burger'
import Menu from './Menu'
import ThemeMode from './ThemeMode'

const css = {
  wrapper:
    'z-50 w-full select-none bg-l-bg/80 dark:bg-d-bg/80 border-b border-black/10 dark:border-white/10',
  sticky:
    'backdrop-blur sticky top-0 duration-[150ms,500ms] transition-[background,transform]',
  hidden: '-translate-y-full',
  inner: 'max-w-5xl mx-auto px-4 ',
  nav: 'h-14 sm:h-16 flex items-center justify-between',
  actions: 'flex items-center space-x-3 sm:space-x-4 w-1/3 justify-end',
}

export default function Header() {
  const isHeaderHidden = useStore((state) => state.isHeaderHidden)

  return (
    <header className={cn(css.wrapper, css.sticky, isHeaderHidden && css.hidden)}>
      <div className={css.inner}>
        <nav className={css.nav}>
          <Brand />
          <Menu />
          <div className={css.actions}>
            <ThemeMode />
            <Burger />
          </div>
        </nav>
      </div>
    </header>
  )
}
