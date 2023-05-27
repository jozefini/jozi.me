<script>
	import { cn } from '$lib/utils/helpers'
	import { offCanvas } from '$lib/stores/offCanvas'
	import { fade } from 'svelte/transition'

	const { hide } = offCanvas

	const css = {
		wrapper: 'fixed max-w-[90%] w-[32rem] duration-[600ms] h-full top-0 right-0 z-40',
		bgColor: 'absolute right-0 top-0 w-full h-full',
		showWrapper: 'translate-x-0',
		hideWrapper: 'translate-x-full',
		edge: 'w-full absolute left-0 h-full bg-footer duration-[600ms]',
		showEdge: 'rounded-l-0 delay-200',
		hideEdge: 'rounded-l-[50%] delay-75',
		overlay: 'fixed inset-0 bg-black/30'
	}
</script>

{#if $offCanvas}
	<div
		class={css.overlay}
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 300 }}
		on:click={hide}
		on:keyup={hide}
	/>
{/if}

<div class={cn(css.wrapper, $offCanvas ? css.showWrapper : css.hideWrapper)}>
	<div class={cn(css.edge, $offCanvas ? css.showEdge : css.hideEdge)} />
	<div class={css.bgColor} />
	<div class={cn(css.inner, $offCanvas ? css.showInner : css.hideInner)} />
</div>
