import { useUniqueArrayIds } from 'hooks/useUniqueArrayIds'
import { cn, getPath } from 'lib/helpers'
import { ActiveLink } from '../common/ActiveLink'

interface MenuProps {
  className?: string
}

const css = {
  wrapper: '',
  list: 'flex items-center justify-center gap-x-12',
  item: '',
  link: 'text-sm uppercase py-3 tracking-widest font-medium',
  linkIn: 'text-white shadow-[inset_0_-5px_0_#fff]',
  linkOut:
    'shadow-[inset_0_0_0_#fff] transition-[color,box-shadow] text-white/50  hover:text-white hover:shadow-[inset_0_-5px_0_#fff]',
}
const allLinks = [
  {
    path: getPath('about'),
    title: 'About',
  },
  {
    path: getPath('portfolio'),
    title: 'Portfolio',
  },
  {
    path: getPath('snippets'),
    title: 'Snippets',
  },
  {
    path: getPath('blog'),
    title: 'Blog',
  },
]

export function Menu({ className }: MenuProps) {
  const navLinks = useUniqueArrayIds(allLinks)

  return (
    <nav className={cn(css.wrapper, className)}>
      <ul className={css.list}>
        {navLinks.map(({ id, path, title }) => (
          <li key={id} className={css.item}>
            <ActiveLink
              href={path}
              className={cn(css.link)}
              classNameIn={css.linkIn}
              classNameOut={css.linkOut}
            >
              {title}
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
