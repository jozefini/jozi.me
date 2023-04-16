import { LinkHTMLAttributes, ReactNode } from 'react'

interface ExternalLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a rel="noopener noreferrer nofollow" target="_blank" {...props}>
      {children}
    </a>
  )
}
