import { minify } from 'html-minifier-terser'

const minification_options = {
	collapseWhitespace: true,
	removeComments: false,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	sortAttributes: true,
	sortClassName: true
}

export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => minify(html, minification_options)
	})

	return response
}
