import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import Hero from '../components/ui/Hero'

const css = {
  main: '',
  heroGradient: 'from-rose-400 to-indigo-400',
}

export default function PortfolioPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Portfolio'
  const description = 'A few of my recent work and side projects.'

  return (
    <>
      <NextSeo title="Portfolio" />
      <main className={css.main}>
        <Hero title={title} description={description} bgGradient={css.heroGradient} />
      </main>
    </>
  )
}

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  return {
    props: {},
  }
}
