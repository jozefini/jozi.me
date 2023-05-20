<script lang="ts">
	import { getTitle } from '$lib/utils/head'

	const meta = {
		title: getTitle('Insights'),
		description: 'Insights'
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>
