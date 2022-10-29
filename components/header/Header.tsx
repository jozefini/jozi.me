import { cn } from '../../lib/helpers'
import useStore from '../../lib/store'
import Brand from './Brand'
import Burger from './Burger'
import Menu from './Menu'
import ThemeMode from './ThemeMode'

const css = {
  wrapper: 'z-50 w-full select-none bg-l-bg/80 dark:bg-d-bg/80',
  sticky:
    'backdrop-blur sticky top-0 duration-[150ms,500ms] transition-[background,transform]',
  hidden: '-translate-y-full',
  inner: 'max-w-5xl mx-auto px-4 ',
  nav: 'h-16 sm:h-20 flex items-center justify-between',
  actions: 'flex items-center space-x-6 w-1/3 justify-end',
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
