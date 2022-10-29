import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Hero from '../components/ui/Hero'

interface AboutPageProps {}

const css = {
  main: '',
  hero: 'bg-teal-600/10 dark:bg-teal-800',
}

export default function AboutPage({}: AboutPageProps) {
  const title = 'About'
  const description = 'Building a better web is my everyday goal.'

  return (
    <>
      <NextSeo title="About" />
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
