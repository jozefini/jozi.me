import { createClient, SanityClient } from 'next-sanity'

import { sanityConfig } from './config'
import { asyncReadFile, asyncWriteFile } from './fileSystem'

const sanityClient = (preview: boolean): SanityClient => {
  return preview
    ? createClient({
        ...sanityConfig,
        useCdn: false,
        token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
      })
    : createClient(sanityConfig)
}

export const getClient = async (
  query: string,
  params: any,
  cacheAs: false | string = false,
  preview: boolean = false
): Promise<any> => {
  let response = null
  const isDevMode = process.env.NODE_ENV == 'development'

  if (isDevMode) {
    const cachedFile = `./public/cache/${cacheAs}`
    response = await asyncReadFile(cachedFile)

    if (!response) {
      response = await sanityClient(preview).fetch(query, params)

      await asyncWriteFile(cachedFile, response)
    }
  } else {
    response = await sanityClient(preview).fetch(query, params)
  }
  return response
}
