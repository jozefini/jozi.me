<script lang="ts">
	import '../app.css'
	import { beforeNavigate, goto } from '$app/navigation'
	import Header from '$components/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import { fly } from 'svelte/transition'

	let navigating = false
	let handleChange = () => {}

	beforeNavigate((navigation: any) => {
		if (!navigating) {
			navigating = true
			document.body.classList.add('overflow-hidden')
			navigation.cancel()
			handleChange = async () => {
				const route = navigation.to.route.id
				await goto(route)
				document.body.classList.remove('overflow-hidden')
				navigating = false
			}
		}
	})

	const css = {
		main: '',
		inner: '',
		overlay: 'fixed inset-0 bg-orange-600 z-[999]'
	}

	let inTime = 1000
	let outTime = 1000
</script>

<div class="min-h-screen max-w-[100vw] overflow-hidden font-primary fw-400">
	<Header />

	<main class={css.main}>
		{#if navigating}
			<div
				class={css.overlay}
				in:fly={{ y: '100%', opacity: 1, duration: 700 }}
				out:fly={{ y: '-100%', opacity: 1, duration: 700 }}
			/>
		{:else}
			<div
				class={css.inner}
				in:fly={{ y: 200, duration: inTime, opacity: 1 }}
				out:fly={{ y: -200, duration: outTime, opacity: 1 }}
				on:outroend={handleChange}
			>
				<slot />
			</div>
		{/if}
	</main>

	<Footer />
</div>
