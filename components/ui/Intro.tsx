interface IntroProps {
  title?: string
}

const css = {
  section: 'py-14 sm:py-20 md:py-24 lg:py-32',
  inner: 'relative max-w-4xl mx-auto px-4',
  title:
    'text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-semibold tracking-tight',
}

export default function Intro({ title }: IntroProps) {
  return (
    <section className={css.section}>
      <div className={css.inner}>
        <h1 className={css.title}>{title}</h1>
      </div>
    </section>
  )
}
