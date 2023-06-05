import { preferedTheme } from '$lib/utils/helpers'
import { writable } from 'svelte/store'

const createStore = () => {
	const { theme } = preferedTheme()
	const { subscribe, set, update } = writable(theme)
	const setMode = (mode: 'dark' | 'light') => {
		update(() => mode)
		localStorage.setItem('mode', mode)
	}

	return {
		subscribe,
		darkMode: () => setMode('dark'),
		lightMode: () => setMode('light'),
		reset: () => set(theme)
	}
}

export const theme = createStore()
