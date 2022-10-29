import { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

export default class Document extends ServerStyleSheetDocument {
  render() {
    const fontName = 'Poppins'
    const fontWght = [400, 500, 600, 700].join(';')

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href={`https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontWght}&display=swap`}
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                '!function(){try{var e=window,a=e.localStorage,t="theme",c=a[t],r="dark",d=document.documentElement.classList;c===r?d.add(r):t in a||!e.matchMedia("(prefers-color-scheme: dark)").matches?d.remove(r):(d.add(r),a.setItem(t,r))}catch{}}();',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
