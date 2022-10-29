import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import Hero from '../components/ui/Hero'

interface ArticlesPageProps {}

const css = {
  main: '',
  hero: 'bg-indigo-600/10 dark:bg-indigo-900',
}

export default function ArticlesPage({}: ArticlesPageProps) {
  const title = 'About'
  const description = 'Building a better web is my everyday goal.'

  return (
    <>
      <NextSeo title="Articles" />
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
