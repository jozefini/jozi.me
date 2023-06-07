<script lang="ts">
	import '../app.css'
	import { onMount } from 'svelte'
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import { fly } from 'svelte/transition'
	import { offCanvas } from '$lib/stores/offCanvas'
	import { cubicIn, cubicOut } from 'svelte/easing'
	import { cn } from '$lib/utils/helpers'

	export let data
	const { hide } = offCanvas

	// Everytime data.pathname changes hide the offCanvas.
	$: if (data.pathname) {
		hide()
	}

	let loaded = false
	onMount(() => {
		loaded = true
	})

	const css = {
		page: 'min-h-screen max-w-[100vw] overflow-hidden font-primary fw-400',
		inner: 'duration-500',
		showInner: 'opacity-100 translate-y-0 ease-out',
		hideInner: 'opacity-0 translate-y-20'
	}

	let inDuration = 700
	let outDuration = 300
</script>

<div class={css.page}>
	<Header />

	<main class={cn(css.inner, loaded ? css.showInner : css.hideInner)}>
		{#key data.pathname}
			<div
				class="wrap"
				in:fly={{ y: 200, duration: inDuration, delay: outDuration, easing: cubicOut }}
				out:fly={{ y: -400, duration: outDuration, easing: cubicIn, opacity: 1 }}
			>
				<slot />
			</div>
		{/key}
	</main>

	<Footer />
</div>

<style>
	.wrap {
		grid-row: 1;
		grid-column: 1;
	}
</style>
