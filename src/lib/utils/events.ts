export function on(
	el: any,
	event: string,
	handler: (e: any) => void,
	options?: boolean | AddEventListenerOptions
) {
	el?.addEventListener(event, handler, options)
}

export function off(
	el: any,
	event: string,
	handler: (e: any) => void,
	options?: boolean | EventListenerOptions
) {
	el?.removeEventListener(event, handler, options)
}

export function trigger(el: HTMLElement | Window | Document, event: string, detail?: any) {
	el?.dispatchEvent(new CustomEvent(event, { detail }))
}
