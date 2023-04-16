import { cn } from '../lib/helpers'

interface FooterProps {
  className?: string
}

const css = {
  wrapper: 'sticky top-[100vh]',
  inner: '',
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn(css.wrapper, className)}>
      <div className={css.inner}>
        <p>Copyright 2023 Jozefin Bashaj</p>
      </div>
    </footer>
  )
}
