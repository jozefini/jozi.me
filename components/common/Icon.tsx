import { Icons } from 'types/icons'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: Icons
  [key: string]: any
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" {...props}>
      <use xlinkHref={`sprite.svg#icon-${name}`} />
    </svg>
  )
}
