// import picture from 'assets/images/picture.jpg'
import { Icon } from 'components/common/Icon'
import { cn } from 'lib/helpers'
// import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

const css = {
  wrapper: '',
  link: 'inline-flex items-center justify-center',
  linkEffects: 'active:scale-95 will-change-transform transition-transform',
  logo: 'fill-white w-9 h-9 sm:w-10 sm:h-10', // 'w-12 h-12 lg:w-16 lg:h-16',
  image: 'w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover',
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn(css.wrapper, className)}>
      <Link href="/" className={cn(css.link, css.linkEffects)}>
        <Icon name="logo" className={css.logo} />
        {/* <Image src={picture} alt="" className={css.image} /> */}
      </Link>
    </div>
  )
}
