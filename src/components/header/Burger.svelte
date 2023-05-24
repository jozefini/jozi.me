<script>
	import { onMount } from 'svelte'
	import { offCanvas } from '$lib/stores/offCanvas'
	import { clickOutside } from '$lib/directives/clickOutside'
	import { off, on } from '$lib/utils/events'
	import { cn } from '$lib/utils/helpers'
	import Magnetic from '../Magnetic.svelte'
	import OffCanvas from './OffCanvas.svelte'

	let hideBurger = true
	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)')
		const handleResize = () => {
			hideBurger = mediaQuery.matches && window.scrollY < 200
		}
		handleResize()
		on(mediaQuery, 'change', handleResize)
		on(window, 'scroll', handleResize)
		return () => {
			off(mediaQuery, 'change', handleResize)
			off(window, 'scroll', handleResize)
		}
	})

	const { toggle, hide } = offCanvas
	const css = {
		wrapper:
			'z-50 in-flex rounded-full centered fixed top-4 sm:top-5 md:top-6 right-0 transition-transform duration-500',
		showWrapper: '-translate-x-4 sm:-translate-x-6 md:-translate-x-8',
		hideWrapper: 'translate-x-20 sm:translate-x-16 md:translate-x-40',
		magnetic: 'in-flex rounded-full centered',
		btn: 'in-flex flex-col centered sq-14 sm:sq-16 md:sq-20 rounded-full text-white transition-all',
		default: 'bg-footer hover:bg-blue-600 gap-2 hover:gap-3',
		active: 'bg-blue-600 gap-4',
		line: 'w-6 h-px bg-white in-flex transition-all duration-300 origin-right',
		activeLine: 'first:-rotate-45 last:rotate-45 -translate-x-1'
	}
</script>

<div use:clickOutside on:outclick={hide}>
	<div class={cn(css.wrapper, !hideBurger || $offCanvas ? css.showWrapper : css.hideWrapper)}>
		<Magnetic class={css.magnetic} power={50}>
			<button class={cn(css.btn, $offCanvas ? css.active : css.default)} on:click={toggle}>
				<div class={cn(css.line, $offCanvas && css.activeLine)} />
				<div class={cn(css.line, $offCanvas && css.activeLine)} />
			</button>
		</Magnetic>
	</div>
	<OffCanvas />
</div>
