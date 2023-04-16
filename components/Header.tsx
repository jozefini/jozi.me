import { cn } from 'utils/helpers'
import { Logo } from './header/Logo'
import { Menu } from './header/Menu'
import { Action } from './header/Action'

interface HeaderProps {
  className?: string
}

const css = {
  wrapper: 'pt-4 lg:pt-10',
  inner: 'px-4 max-w-7xl mx-auto flex items-center justify-between gap-x-10',
  brand: 'flex items-center w-1/2',
  menu: 'hidden lg:flex items-center shrink-0',
  action: 'flex items-center justify-end w-1/2',
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(css.wrapper, className)}>
      <div className={css.inner}>
        <Logo className={css.brand} />
        <Menu className={css.menu} />
        <Action className={css.action} />
      </div>
    </header>
  )
}
