<script lang="ts">
	import '../app.css'
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
</script>

<div class="min-h-screen max-w-[100vw] overflow-hidden font-primary fw-400">
	<Header />
	<main>
		<slot />
	</main>
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
