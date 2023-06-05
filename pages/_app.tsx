import '../styles/index.css'

import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { createContext } from 'react'

import Layout from '../components/Layout'

export const AppContext = createContext<{
  translate?: {}
}>({})

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/studio/')) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <AppContext.Provider value={{ translate: {} }}>
        <DefaultSeo title="Explore" titleTemplate="%s | Jozi.me" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
      <Analytics />
    </>
  )
}
