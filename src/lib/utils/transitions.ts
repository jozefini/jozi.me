import { linear } from 'svelte/easing'

type ScaleXOptions = {
	easing?: (t: number) => number
	duration?: number
	axis?: '' | 'x' | 'y'
	origin?: 'left' | 'right' | 'top' | 'bottom' | 'center'
	from?: number
	to?: number
}

export function scale(
	node,
	{ easing = linear, duration = 400, axis = 'x', origin = 'right', from = 0, to = 1 }: ScaleXOptions
) {
	return {
		duration,
		easing,
		css: (t) => `
      transform-origin: ${origin};
      transform: scale${axis.toUpperCase()}(${t * (to - from) + from});
    `
	}
}
