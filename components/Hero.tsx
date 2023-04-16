import Link from 'next/link'
import { cn, getPath } from '../lib/helpers'
import { Icon } from './common/Icon'
import { Space_Grotesk } from 'next/font/google'

interface HeroProps {
  className?: string
}

const css = {
  wrapper: 'py-20 relative',
  inner: 'px-4 max-w-6xl mx-auto grid lg:grid-cols-2 items-center',
  details: '',
  subtitle: 'text-xs lg:text-base text-white/50 uppercase tracking-widest mb-8',
  title: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold',
  titleCenter: 'flex items-center gap-x-10 sm:gap-x-12 md:gap-x-14 lg:gap-x-20',
  titleLine: '-ml-10 h-[0.1em] w-32 sm:w-36 md:w-44 lg:w-52 inline-flex bg-white',
  action: 'mt-16',
  btn: 'h-14 lg:h-16 pl-5 lg:pl-6 pr-16 lg:pr-20 group relative inline-flex items-center justify-center uppercase text-xs lg:text-sm tracking-widest border border-white/50 bg-[] overflow-hidden rounded-lg transition-[color,border,transform] duration-[300ms,300ms,150ms] active:scale-95 hover:border-white hover:text-body',
  btnGlow:
    'absolute left-0 top-0 w-full h-full bg-white origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 -z-1',
  btnArrow:
    'inline-flex items-center justify-center p-1 rounded-full group-hover:bg-body bg-white transition-colors duration-300 absolute right-6 top-1/2 -translate-y-1/2',
  btnIcon:
    'group-hover:text-white w-3 h-3 lg:w-4 lg:h-4 text-body -rotate-90 transition-colors duration-300',
  media: '',
  rightCircle:
    'w-[50vw] h-[50vw] blur-[20vw] md:w-[30vw] md:h-[30vw] md:blur-[15vw] rounded-full bg-primary/50 absolute right-0 top-full translate-x-1/3 -translate-y-1/2',
}
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const portfolioPath = getPath('portfolio')

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn(css.wrapper, className)}>
      <div className={css.rightCircle} />
      <div className={css.inner}>
        <div className={css.details}>
          <div className={cn(css.subtitle, spaceGrotesk.className)}>Jozefin Bashaj</div>
          <h1 className={css.title}>
            full stack
            <span className={css.titleCenter}>
              <span className={css.titleLine} />
              web
            </span>
            developer
          </h1>
          <div className={css.action}>
            <Link className={cn(css.btn, spaceGrotesk.className)} href={portfolioPath}>
              <span className={css.btnGlow} />
              See the portfolio
              <span className={css.btnArrow}>
                <Icon name="chevron-down" className={css.btnIcon} strokeWidth={1.6} />
              </span>
            </Link>
          </div>
        </div>
        <div className={css.media}></div>
      </div>
    </section>
  )
}
