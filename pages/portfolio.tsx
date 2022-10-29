import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Hero from '../components/ui/Hero'

interface PortfolioPageProps {}

const css = {
  main: '',
  hero: 'bg-rose-600/10 dark:bg-rose-900',
}

export default function PortfolioPage({}: PortfolioPageProps) {
  const title = 'Portfolio'
  const description = 'A few of my recent work and side projects.'

  return (
    <>
      <NextSeo title="Portfolio" />
      <main className={css.main}>
        <Hero title={title} description={description} className={css.hero} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
