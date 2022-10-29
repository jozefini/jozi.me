import { cn } from '../../lib/helpers'
import useStore from '../../lib/store'
import { __ } from '../../lib/translate'

const css = {
  wrapper:
    'md:hidden inline-flex justify-center items-center h-11 w-11 rounded-full hover:bg-black/5 dark:hover:bg-white/5',
  lines: 'w-6 h-6 space-y-1.5 flex flex-col items-center justify-center',
  line: 'bg-black dark:bg-white w-full h-[2px] origin-center duration-[150ms] transition-[transform]',
  lineTop: 'rotate-45 translate-y-1',
  lineBottom: '-rotate-45 -translate-y-1',
}

export default function Burger() {
  const isMenuOpen = useStore((state) => state.isMenuOpen)
  const toggleMenu = useStore((state) => state.toggleMenu)

  return (
    <button className={css.wrapper} onClick={toggleMenu} aria-label={__('toggleNav')}>
      <span className={css.lines}>
        <span className={cn(css.line, isMenuOpen && css.lineTop)} />
        <span className={cn(css.line, isMenuOpen && css.lineBottom)} />
      </span>
    </button>
  )
}
