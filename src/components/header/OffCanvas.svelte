<script>
	import { cn } from '$lib/utils/helpers'
	import { offCanvas } from '$lib/stores/offCanvas'
	import { fade } from 'svelte/transition'

	const { hide } = offCanvas

	const css = {
		wrapper:
			'fixed max-w-[90%] w-[32rem] transition-all duration-500 h-full top-0 right-0 z-40 bg-footer',
		shown: 'translate-x-0',
		hidden: 'translate-x-full',
		overlay: 'fixed inset-0 bg-black/30'
	}
</script>

{#if $offCanvas}
	<div
		class={css.overlay}
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 200 }}
		on:click={hide}
		on:keyup={hide}
	/>
{/if}

<div class={cn(css.wrapper, $offCanvas ? css.shown : css.hidden)} />
