import Link from 'next/link'
import { __ } from '../../lib/translate'
import useStore from '../../lib/store'

const css = {
  wrapper: 'flex items-center w-1/3',
  brandLink: '',
  brandName: 'font-semibold text-3xl -rotate-45',
  logo: 'w-8 sm:w-9',
}

export default function Brand() {
  const closeMenu = useStore((state) => state.closeMenu)

  return (
    <div className={css.wrapper}>
      <Link href="/" className={css.brandLink} onClick={closeMenu} aria-label={__('goToHome')}>
        <svg
          className={css.logo}
          viewBox="0 0 26.46 26.46"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7 3.45 4.75-2.37 4.75 2.37v7.13l4.75 2.37v7.13l-4.75 2.37v-7.12l-4.75-2.38V5.83z" />
          <path d="m5.31 4.38 4.75 2.37V21l4.75 2.38-4.75 2.37-4.75-2.38z" />
          {/* <path d="M11.69 14.82v5.02l3.15 1.57V16.4l-3.15-1.57" /> */}
        </svg>
      </Link>
    </div>
  )
}
