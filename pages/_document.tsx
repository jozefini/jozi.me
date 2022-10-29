import { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

export default class Document extends ServerStyleSheetDocument {
  render() {
    const fontFamily = 'Poppins'
    const fontWeight = [400, 500, 600, 700]
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${fontWeight.join(
      ';'
    )}&display=swap`

    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href={fontUrl} as="style" />
          <link
            href={fontUrl}
            rel="stylesheet"
            media="print"
            // @ts-ignore
            onLoad="this.media='all'"
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
