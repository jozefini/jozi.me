<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils/helpers'
	import { ROUTE_PATHS } from '$lib/constants'
	import Magnetic from '$components/Magnetic.svelte'
	import { fly } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'
	import { offCanvas } from '$lib/stores/offCanvas'

	const { hide } = offCanvas

	const css = {
		wrapper: 'text-5xl',
		menu: 'grid gap-y-7 font-normal',
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
						in:fly={{ x: 300, duration: 800, opacity: 1, delay: i * 30 + 200, easing: cubicOut }}
						out:fly={{ x: 300, duration: 600, opacity: 1, delay: i * 50, easing: cubicIn }}
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
