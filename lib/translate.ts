import { strReplacer } from 'lib/helpers'
import { useTranslate } from 'hooks/useTranslate'

export const __ = (id: string, replacer?: { [key: string]: string }) => {
  const { translate } = useTranslate()
  const txt = translate[id] || id

  if (txt.includes('{{') && !!replacer) {
    return strReplacer(txt, replacer)
  }
  return txt
}
