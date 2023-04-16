import { ReactNode } from 'react'
import { Sora } from 'next/font/google'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import 'assets/styles.css'

interface LayoutProps {
  children: ReactNode
}

const font = Sora({ subsets: ['latin'] })
const css = {
  inner: 'relative min-h-screen overflow-hidden',
}

export const metadata = {
  title: 'Jozi.me | Home',
  description: 'Full-stack developer, designer, and writer.',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/sprite.svg" />
      </head>
      <body className={font.className}>
        <div className={css.inner}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
