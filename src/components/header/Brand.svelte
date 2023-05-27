<script>
	import { onMount } from 'svelte'
	import Magnetic from '../Magnetic.svelte'
	import { SHOW_BURGER_AT } from '$lib/constants'
	import { off, on } from '$lib/utils/events'
	import { cn } from '$lib/utils/helpers'

	let hideBrand = true

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)')
		const handleResize = () => {
			hideBrand = mediaQuery.matches && window.scrollY > SHOW_BURGER_AT
		}
		handleResize()
		on(mediaQuery, 'change', handleResize)
		on(window, 'scroll', handleResize)
		return () => {
			off(mediaQuery, 'change', handleResize)
			off(window, 'scroll', handleResize)
		}
	})

	const css = {
		wrapper: 'in-flex centered transition-transform duration-500',
		hideWrapper: '-translate-y-14 scale-50',
		icon: 'w-9 sm:w-10 text-black dark:text-white transition-colors'
	}
</script>

<div class={cn(css.wrapper, hideBrand && css.hideWrapper)}>
	<Magnetic tag="a" href="/" class={css.wrapper} power={30}>
		<svg class={css.icon} viewBox="0 0 26.46 26.46" xmlns="http://www.w3.org/2000/svg">
			<path
				stroke="currentColor"
				stroke-width="1.2"
				fill="none"
				d="m7 3.45 4.75-2.37 4.75 2.37v7.13l4.75 2.37v7.13l-4.75 2.37v-7.12l-4.75-2.38V5.83z"
			/>
			<path fill="currentColor" d="m5.31 4.38 4.75 2.37V21l4.75 2.38-4.75 2.37-4.75-2.38z" />
		</svg>
	</Magnetic>
</div>
