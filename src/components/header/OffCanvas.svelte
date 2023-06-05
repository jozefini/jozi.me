<script lang="ts">
	import { offCanvas } from '$lib/stores/offCanvas'
	import { fade, fly } from 'svelte/transition'
	import { scale } from '$lib/utils/transitions'
	import { expoIn, expoOut } from 'svelte/easing'
	import OffNav from './OffNav.svelte'

	const { hide } = offCanvas

	const css = {
		wrapper: 'fixed max-w-[90%] w-[32rem] bg-canvas h-full top-0 right-0 z-40 text-white',
		edge: 'overflow-hidden absolute w-[30%] scale-x-0 h-full right-full -mr-1 duration-[600ms]',
		leftRounded:
			'top-1/2 -translate-y-1/2 rounded-[50%] bg-canvas h-[150%] w-[750%] left-0 absolute',
		overlay: 'fixed inset-0 bg-black/30',
		inner: 'p-20 flex h-full items-center'
	}
</script>

{#if $offCanvas}
	<div
		class={css.overlay}
		in:fade={{ duration: 800 }}
		out:fade={{ duration: 500 }}
		on:click={hide}
		on:keyup={hide}
	/>

	<div
		class={css.wrapper}
		in:fly={{ x: '100%', duration: 800, opacity: 1, easing: expoOut }}
		out:fly={{ x: '130%', duration: 500, opacity: 1, easing: expoIn }}
	>
		<div
			class={css.edge}
			in:scale={{ from: 1, to: 0, duration: 400 }}
			out:scale={{ from: 1, to: 0, duration: 400 }}
		>
			<div class={css.leftRounded} />
		</div>

		<div class={css.inner}>
			<OffNav />
		</div>
	</div>
{/if}
