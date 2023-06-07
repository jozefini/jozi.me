import { off, on, trigger } from '$lib/utils/events'

export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			trigger(node, 'outclick')
		}
	}

	on(document, 'click', handleClick, true)
	return {
		destroy() {
			off(document, 'click', handleClick, true)
		}
	}
}
