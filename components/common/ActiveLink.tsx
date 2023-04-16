'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkHTMLAttributes, ReactNode } from 'react'
import { cn } from 'lib/helpers'

interface ActiveLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  classNameIn?: string
  classNameOut?: string
  exact?: boolean
  children?: ReactNode
}

export function ActiveLink({
  href,
  className,
  classNameIn,
  classNameOut,
  children,
  exact,
  ...restProps
}: ActiveLinkProps) {
  const asPath = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        className,
        asPath === href || (!exact && asPath.startsWith(`${href}/`))
          ? classNameIn
          : classNameOut
      )}
      {...restProps}
    >
      {children}
    </Link>
  )
}
