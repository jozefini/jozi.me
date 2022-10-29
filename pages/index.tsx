import { GetStaticPathsContext, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'

import Intro from '../components/ui/Intro'

const css = {
  main: '',
}

export default function HomePage({}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps = async ({}: GetStaticPathsContext) => {
  return {
    props: {},
  }
}
