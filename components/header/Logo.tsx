import Link from 'next/link'
import Image from 'next/image'
import { cn } from 'lib/helpers'
// import { Icon } from 'components/common/Icon'
import picture from 'assets/images/picture.jpg'

interface LogoProps {
  className?: string
}

const css = {
  wrapper: '',
  link: 'inline-flex items-center justify-center',
  linkEffects: 'active:scale-95 will-change-transform transition-transform',
  logo: 'w-12 h-12 lg:w-16 lg:h-16',
  image: 'w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover',
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn(css.wrapper, className)}>
      <Link href="/" className={cn(css.link, css.linkEffects)}>
        {/* <Icon name="logo" className={css.logo} /> */}
        <Image src={picture} alt="" className={css.image} />
      </Link>
    </div>
  )
}
