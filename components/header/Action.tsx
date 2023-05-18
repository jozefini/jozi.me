import { cn, getPath } from 'lib/helpers'
import { ActiveLink } from '../common/ActiveLink'

interface ActionProps {
  className?: string
}

const css = {
  wrapper: '',
  btn: 'hidden font-medium lg:inline-flex items-center justify-center h-12 px-4 min-w-[10rem] uppercase text-sm border rounded-lg tracking-widest active:scale-95',
  btnIn: 'border-white transition-transform',
  btnOut:
    'border-white/50 transition-[border,transform] duration-[300ms,150ms] hover:border-white',
}
const contactPath = getPath('contact')

export function Action({ className }: ActionProps) {
  return (
    <div className={cn(css.wrapper, className)}>
      <ActiveLink
        href={contactPath}
        className={css.btn}
        classNameIn={css.btnIn}
        classNameOut={css.btnOut}
      >
        Contact Me
      </ActiveLink>
    </div>
  )
}
