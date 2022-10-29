import { useContext } from 'react'
import { AppContext } from '../pages/_app'
import { StringObject } from '../types'
import { strReplacer } from './helpers'

export const __ = (id: string, replacer?: StringObject) => {
  const { translate } = useContext(AppContext)
  const txt = translate[id] || id

  if (txt.includes('{{')) {
    return strReplacer(txt, replacer as StringObject)
  }
  return txt
}
