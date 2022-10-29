import { LinkHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '../../lib/helpers'

interface ActiveLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  activeClassName?: string
  defaultClassName?: string
  exact?: boolean
  children?: ReactNode
}

export default function ActiveLink({
  href,
  className,
  activeClassName,
  defaultClassName,
  children,
  exact,
  ...restProps
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  return (
    <Link
      href={href}
      className={cn(
        className,
        asPath === href || (!exact && asPath.startsWith(`${href}/`))
          ? activeClassName
          : defaultClassName
      )}
      {...restProps}
    >
      {children}
    </Link>
  )
}
