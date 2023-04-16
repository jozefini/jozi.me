import { cn, getPath } from '../../lib/helpers'
import { ActiveLink } from '../common/ActiveLink'
import { Space_Grotesk } from 'next/font/google'

interface ActionProps {
  className?: string
}

const css = {
  wrapper: '',
  btn: 'hidden lg:inline-flex items-center justify-center h-12 px-4 min-w-[10rem] uppercase text-sm border rounded-lg tracking-widest active:scale-95',
  btnIn: 'border-white transition-transform',
  btnOut:
    'border-white/50 transition-[border,transform] duration-[300ms,150ms] hover:border-white',
}
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const contactPath = getPath('contact')

export function Action({ className }: ActionProps) {
  return (
    <div className={cn(css.wrapper, className)}>
      <ActiveLink
        href={contactPath}
        className={cn(css.btn, spaceGrotesk.className)}
        classNameIn={css.btnIn}
        classNameOut={css.btnOut}
      >
        Get in touch
      </ActiveLink>
    </div>
  )
}
