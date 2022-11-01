import { GetStaticPathsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import Hero from '../components/ui/Hero'

const css = {
  main: '',
  heroGradient: 'from-teal-400 to-rose-400',
}

export default function AboutPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'About'
  const description = 'Building a better web is my everyday goal.'

  return (
    <>
      <NextSeo title="About" />
      <main className={css.main}>
        <Hero title={title} description={description} bgGradient={css.heroGradient} />
      </main>
    </>
  )
}

export const getStaticProps = async ({}: GetStaticPathsContext) => {
  return {
    props: {},
  }
}
