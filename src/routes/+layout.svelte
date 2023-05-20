<script lang="ts">
	import '../app.css'
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
</script>

<div class="min-h-screen max-w-[100vw] overflow-hidden font-primary font-normal">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
