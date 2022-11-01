import { cn } from '../../lib/helpers'

interface HeroProps {
  className?: string
  title?: string
  description?: string
  bgGradient?: string
}

const css = {
  section: 'select-none border-b border-black/10 dark:border-white/10',
  inner: 'h-32 sm:h-40 md:h-48 flex items-center justify-center w-full max-w-5xl mx-auto px-4',
  title: 'text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight',
  description: 'sm:text-lg md:text-xl mt-2 sm:mt-4 md:mt-6 max-w-2xl mx-auto tracking-tight',
}

export default function Hero({ className, title, description, bgGradient }: HeroProps) {
  return (
    <section className={cn(css.section, className)}>
      <div className={css.inner}>
        <h1 className={css.title}>{title}</h1>
        {/* {description && <p className={css.description}>{description}</p>} */}
      </div>
    </section>
  )
}
