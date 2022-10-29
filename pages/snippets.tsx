import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Hero from '../components/ui/Hero'

interface SnippetsPageProps {}

const css = {
  main: '',
  hero: 'bg-amber-600/10 dark:bg-amber-900',
}

export default function SnippetsPage({}: SnippetsPageProps) {
  const title = 'Snippets'
  const description = 'A collection of code snippets for web development.'

  return (
    <>
      <NextSeo title="Snippets" />
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
