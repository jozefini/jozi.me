import createImageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './config'

const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source?: string) => {
  return imageBuilder.image(source).auto('format').fit('max')
}

export const onImageLoad = (imgUrl: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', resolve)
    image.addEventListener('error', reject)
    image.src = imgUrl
  })
}
