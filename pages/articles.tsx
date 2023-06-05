import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import Hero from '../components/ui/Hero'

const css = {
  main: '',
  heroGradient: 'from-indigo-400 to-amber-400',
}

export default function ArticlesPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Articles'
  const description = "Some discoveries that I'd like to share with you."

  return (
    <>
      <NextSeo title="Articles" />
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