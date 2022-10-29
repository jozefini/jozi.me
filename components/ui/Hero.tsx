import { cn } from '../../lib/helpers'

interface HeroProps {
  className?: string
  title?: string
  description?: string
  colors?: 'red' | 'blue'
}

const css = {
  section: 'mb-10 sm:mb-12 md:mb-14 lg:mb-16',
  inner: 'mb-3 py-10 sm:py-12 md:py-14 lg:py-16 max-w-5xl mx-auto px-4 text-center',
  title: 'text-4xl sm:text-6xl inline-flex font-semibold tracking-tight',
  description: 'text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl mx-auto',
}

export default function Hero({ className, title, description, colors }: HeroProps) {
  return (
    <section className={cn(css.section, className)}>
      <div className={css.inner}>
        <h1 className={css.title}>{title}</h1>
        {description && <p className={css.description}>{description}</p>}
      </div>
    </section>
  )
}
