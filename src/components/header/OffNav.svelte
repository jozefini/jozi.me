<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils/helpers'
	import { ROUTE_PATHS } from '$lib/constants'
	import Magnetic from '$components/Magnetic.svelte'
	import { fly } from 'svelte/transition'
	import { expoIn, expoOut } from 'svelte/easing'
	import { offCanvas } from '$lib/stores/offCanvas'

	const { hide } = offCanvas

	const css = {
		wrapper: 'text-6xl',
		menu: 'grid gap-y-7',
		magnetic: '',
		link: 'in-flex',
		dot: '',
		defaultDot: '',
		activeDot: ''
	}

	const navLinks = [
		{
			title: 'Home',
			path: ROUTE_PATHS.home
		},
		{
			title: 'Work',
			path: ROUTE_PATHS.work
		},
		{
			title: 'About',
			path: ROUTE_PATHS.about
		},
		{
			title: 'Insights',
			path: ROUTE_PATHS.insights
		},
		{
			title: 'Contact',
			path: ROUTE_PATHS.contact
		}
	]
</script>

{#if navLinks.length}
	<nav class={css.wrapper}>
		<ul class={css.menu}>
			{#each navLinks as { title, path }, i}
				<Magnetic tag="li" class={css.magnetic} power={30}>
					<a
						on:click={hide}
						href={path}
						class={css.link}
						in:fly={{ x: 300, duration: 400, opacity: 1, delay: i * 30, easing: expoOut }}
						out:fly={{ x: 300, duration: 500, opacity: 1, delay: i * 30, easing: expoIn }}
					>
						{title}
						<span
							class={cn(
								css.dot,
								path === '/'
									? $page.url.pathname === path
									: $page.url.pathname.startsWith(path)
									? css.activeDot
									: css.defaultDot
							)}
						/>
					</a>
				</Magnetic>
			{/each}
		</ul>
	</nav>
{/if}
