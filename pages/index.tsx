import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

import Intro from '../components/ui/Intro'

interface HomePageProps {}

const css = {
  main: '',
}

export default function HomePage({}: HomePageProps) {
  const title = 'Creative Web Developer'

  return (
    <>
      <NextSeo title="Welcome" />
      <main className={css.main}>
        <Intro title={title} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
