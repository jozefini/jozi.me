import { PATHS } from './constants'

export function cn(...args: any[]) {
  return args.filter(Boolean).join(' ') || undefined
}

export function getPath(page: keyof typeof PATHS = 'root', slug?: string) {
  return `${PATHS[page]}${slug ? `/${slug}` : ''}`
}
