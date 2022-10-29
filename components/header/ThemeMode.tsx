import { toggleTheme } from '../../lib/helpers'
import { __ } from '../../lib/translate'

const css = {
  wrapper:
    'relative inline-flex justify-center items-center h-11 w-11 rounded-full hover:bg-black/5 dark:hover:bg-white/5',
  icon: 'w-6',
  sun: 'dark:translate-y-full duration-150 stroke-l-clr',
  sunCore: 'fill-[none]',
  moon: '-translate-y-full dark:translate-y-0 dark:stroke-d-clr duration-150 fill-[none]',
}

export default function ThemeMode() {
  return (
    <button className={css.wrapper} onClick={toggleTheme} aria-label={__('toggleTheme')}>
      <svg
        className={css.icon}
        viewBox="0 0 24 24"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <g className={css.sun}>
          <path
            className={css.sunCore}
            d="M8 12.25A4.25 4.25 0 0 1 12.25 8a4.25 4.25 0 0 1 4.25 4.25 4.25 4.25 0 0 1-4.25 4.25A4.25 4.25 0 0 1 8 12.25Z"
          />
          <path
            fill="none"
            d="M12.25 3v1.5m9.25 7.75H20m-1.2 6.54-1.07-1.06M18.8 5.71l-1.06 1.06M12.25 20v1.5M4.5 12.25H3m3.77-5.48L5.71 5.71m1.06 12.02-1.06 1.06"
          />
        </g>
        <path
          className={css.moon}
          d="M17.25 16.22a6.94 6.94 0 0 1-9.47-9.47 7.45 7.45 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        />
      </svg>
    </button>
  )
}
