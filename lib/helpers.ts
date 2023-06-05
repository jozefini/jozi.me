import { StringObject } from '../types'

export const cn = (...classNames: any[]) => {
  return classNames.filter(Boolean).join(' ')
}

export const toggleTheme = () => {
  const classList = document.documentElement.classList
  const className = 'dark'
  const storedKey = 'theme'

  if (classList.contains(className)) {
    classList.remove(className)
    localStorage.setItem(storedKey, '')
  } else {
    classList.add(className)
    localStorage.setItem(storedKey, className)
  }
}

export const strReplacer = (value: string, replacer: StringObject): string => {
  const shortcodes = Object.keys(replacer)
  if (shortcodes.length) {
    const pattern = new RegExp(`{{(${shortcodes.join('|')})}}`, 'g')

    return value.replace(pattern, (match, key) => (replacer as any)[key])
  }
  return value
}
