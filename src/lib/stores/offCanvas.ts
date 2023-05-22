import { writable } from 'svelte/store'

const createStore = () => {
	const { subscribe, set, update } = writable<boolean>(false)

	return {
		subscribe,
		show: (): void => set(true),
		hide: (): void => set(false),
		toggle: (): void => update((state) => !state),
		reset: () => set(false)
	}
}

export const offCanvas = createStore()
