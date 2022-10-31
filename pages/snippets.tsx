import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import Hero from '../components/ui/Hero'

const css = {
  main: '',
  heroGradient: 'from-amber-400/10 to-teal-400/10 dark:from-amber-400/10 dark:to-teal-400/10',
}

export default function SnippetsPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Snippets'
  const description = 'A collection of code snippets for web development.'

  return (
    <>
      <NextSeo title="Snippets" />
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
