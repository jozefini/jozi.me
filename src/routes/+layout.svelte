<script lang="ts">
	import '../app.css'
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import { fade } from 'svelte/transition'

	export let data: any
</script>

<div class="min-h-screen max-w-[100vw] overflow-hidden font-primary fw-400">
	<Header />
	{#key data.currentPath}
		<main class="under-header" in:fade={{ duration: 150 }} out:fade={{ duration: 150, delay: 150 }}>
			<slot />
		</main>
	{/key}
	<Footer />
</div>

<!-- 
<style>
	main {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}
	main > :global(*) {
		grid-row: 1;
		grid-column: 1;
	}
</style>
 -->
