<script lang="ts">
	import { getTitle } from '$lib/utils/head'
	import Hero from './Hero.svelte'

	const meta = {
		title: getTitle('Contact'),
		description: 'Contact'
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<Hero />
