import { NavLink } from '../../types'
import ActiveLink from '../common/ActiveLink'

const css = {
  wrapper: 'hidden md:flex items-center shrink-0 space-x-10 font-medium',
  item: '',
  link: 'relative inline-flex items-center px-4 h-11 rounded-lg text-l-clr dark:text-d-clr duration-150 transition-[color,opacity]',
  linkActive: '[&>i]:transition-none [&>span]:scale-100 [&>span]:opacity-100',
  linkDefault: '[&:hover>i]:scale-x-100',
  glow: 'absolute inset-0 scale-50 opacity-0 bg-black/5 dark:bg-white/5 rounded-lg duration-[150ms,300ms] transition-[opacity,transform]',
  underline:
    'absolute inline-flex origin-left bg-current w-[calc(100%-2rem)] scale-x-0 h-0.5 left-[1rem] bottom-2 duration-300 transition-[transform]',
}

const navLinks: NavLink[] = [
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/portfolio',
    title: 'Portfolio',
  },
  {
    path: '/articles',
    title: 'Articles',
  },
  {
    path: '/snippets',
    title: 'Snippets',
  },
]

export default function Menu() {
  return (
    <ul className={css.wrapper}>
      {navLinks?.map(({ path, title }: NavLink, i: number) => (
        <li className={css.item} key={i}>
          <ActiveLink
            className={css.link}
            activeClassName={css.linkActive}
            defaultClassName={css.linkDefault}
            href={path}
          >
            <span className={css.glow} />
            <i className={css.underline} />
            {title}
          </ActiveLink>
        </li>
      ))}
    </ul>
  )
}
