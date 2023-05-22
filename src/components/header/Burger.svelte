<script>
	import { offCanvas } from '$lib/stores/offCanvas'
	import { clickOutside } from '$lib/directives/clickOutside'
	import { cn } from '$lib/utils/helpers'
	import Magnetic from '../Magnetic.svelte'
	import OffCanvas from './OffCanvas.svelte'

	const { toggle, hide } = offCanvas
	const css = {
		magnetic: 'z-50 in-flex centered fixed top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6',
		btn: 'in-flex flex-col centered sq-14 sm:sq-16 md:sq-20 rounded-full text-white transition-all',
		default: 'bg-footer hover:bg-blue-600 gap-2 hover:gap-3',
		active: 'bg-blue-600 gap-4',
		line: 'w-6 h-px bg-white in-flex transition-all duration-300 origin-right',
		activeLine: 'first:-rotate-45 last:rotate-45 -translate-x-1'
	}
</script>

<div use:clickOutside on:outclick={hide}>
	<Magnetic class={css.magnetic} power={50}>
		<button class={cn(css.btn, $offCanvas ? css.active : css.default)} on:click={toggle}>
			<div class={cn(css.line, $offCanvas && css.activeLine)} />
			<div class={cn(css.line, $offCanvas && css.activeLine)} />
		</button>
	</Magnetic>
	<OffCanvas />
</div>
