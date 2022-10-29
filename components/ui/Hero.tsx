import { cn } from '../../lib/helpers'

interface HeroProps {
  className?: string
  title?: string
  description?: string
  bgGradient?: string
}

const css = {
  section: 'relative border-b border-black/10 dark:border-white/30',
  inner: 'py-12 sm:py-14 md:py-16 max-w-5xl mx-auto px-4 text-center',
  title: 'text-5xl sm:text-6xl md:text-7xl inline-flex font-semibold tracking-tight',
  description: 'sm:text-lg md:text-xl mt-2 sm:mt-4 md:mt-6 max-w-2xl mx-auto tracking-tight',
  bgGradient: 'absolute inset-0 z-[-1] bg-gradient-to-r',
  bgShade: 'absolute inset-0 z-[-1] bg-gradient-to-b from-l-bg/80 dark:from-d-bg/80',
}

export default function Hero({ className, title, description, bgGradient }: HeroProps) {
  return (
    <section className={cn(css.section, className)}>
      <div className={css.inner}>
        <h1 className={css.title}>{title}</h1>
        {/* {description && <p className={css.description}>{description}</p>} */}
      </div>
      <div className={cn(css.bgGradient, bgGradient)} />
      <div className={css.bgShade} />
    </section>
  )
}
