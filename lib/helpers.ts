import { PATHS } from 'lib/constants'

export function cn(...args: any[]) {
  return args.filter(Boolean).join(' ') || undefined
}

export function getPath(page: keyof typeof PATHS = 'root', slug?: string) {
  return `${PATHS[page]}${slug ? `/${slug}` : ''}`
}

export const toggleTheme = () => {
  const { classList } = document.documentElement
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

export const strReplacer = (value: string, replacer: { [key: string]: string }): string => {
  const shortcodes = Object.keys(replacer)
  if (shortcodes.length) {
    const pattern = new RegExp(`{{(${shortcodes.join('|')})}}`, 'g')

    return value.replace(pattern, (_, key: keyof typeof replacer) => replacer[key])
  }
  return value
}
