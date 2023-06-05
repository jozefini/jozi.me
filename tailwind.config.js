import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cream: '#999D9E',
				footer: '#1C1D20',
				canvas: '#212225'
			},
			fontWeight: {
				thin: 200,
				extralight: 300,
				light: 400,
				normal: 500,
				medium: 550,
				semibold: 650,
				bold: 750,
				extrabold: 850,
				black: 950
			},
			transitionDuration: {
				750: '750ms'
			}
			// Extend a class called iflex-cc to make a flex container with center center alignment.
			// This is useful for centering a div in the middle of the screen.
		}
	},
	plugins: [
		require('@jozefini/tailwindcss'),
		require('@tailwindcss/typography'),
		plugin(({ addUtilities }) =>
			addUtilities({
				'.font-primary': {
					'font-family': 'Roundo'
				},
				'.font-secondary': {
					'font-family': 'Melodrama'
				},
				'.h-header': {
					height: 'var(--h-header)'
				},
				'.under-header': {
					marginTop: 'calc(var(--h-header) * -1)',
					paddingTop: 'var(--h-header)'
				}
			})
		)
	]
}
