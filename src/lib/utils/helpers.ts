import { ROUTE_PATHS } from '$lib/constants'

/**
 * Helper function to conditionally join classNames together.
 * @param args - classNames to join together.
 * @returns - Joined classNames.
 */
export function cn(...args: (string | boolean)[]) {
	return args.filter(Boolean).join(' ').trim() || undefined
}

/**
 * Helper function to return the prefered color mode.
 * @returns - The prefered color mode.
 */
export function preferedTheme() {
	const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
	const localMode = localStorage.getItem('mode')
	const isDark = localMode ? localMode === 'dark' : prefersDark

	return {
		theme: isDark ? 'dark' : 'light',
		isDark,
		isLght: !isDark
	}
}

/**
 * Helper function to return the path for a given page.
 * @param page - The page to get the path for.
 * @param slug - The slug to append to the path.
 * @returns - The path for the given page.
 */
export function getPath(page: keyof typeof ROUTE_PATHS = 'home', slug?: string) {
	const subPath = slug ? `/${slug}` : ''
	return `${ROUTE_PATHS[page]}${subPath}`
}

/**
 * Helper function to replace shortcodes in a string.
 * @param value - The string to replace shortcodes in.
 * @param replacer - The object containing the shortcodes and their replacements.
 * @returns - The string with the shortcodes replaced.
 */
export const replacer = (value: string, replacer: { [key: string]: string }): string => {
	const prefix = '{{'
	const suffix = '}}'
	const shortcodes = Object.keys(replacer)
	if (shortcodes.length) {
		const pattern = new RegExp(`${prefix}(${shortcodes.join('|')})${suffix}`, 'g')

		return value.replace(pattern, (_, key: keyof typeof replacer) => replacer[key])
	}
	return value
}
