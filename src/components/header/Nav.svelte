<script lang="ts">
	import { ROUTE_PATHS, SHOW_BURGER_AT } from '$lib/constants'
	import Magnetic from '$components/Magnetic.svelte'
	import { cn } from '$lib/utils/helpers'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import { off, on } from '$lib/utils/events'

	let hideMenu = true

	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)')
		const handleResize = () => {
			hideMenu = mediaQuery.matches && window.scrollY > SHOW_BURGER_AT
		}

		handleResize()
		on(mediaQuery, 'change', handleResize)
		on(window, 'scroll', handleResize)
		return () => {
			off(mediaQuery, 'change', handleResize)
			off(window, 'scroll', handleResize)
		}
	})

	const css = {
		wrapper: 'hidden md:flex transition-transform duration-500',
		hideWrapper: '[&_a]:-translate-y-14 [&_a]:scale-50',
		menu: 'flex fw-500 items-center gap-x-6 text-lg [&:hover_a:not(:hover)>*]:scale-0',
		magnetic: 'in-flex centered',
		link: 'relative group px-4 py-2 transition-[color,transform] duration-[150ms,500ms] text-black dark:text-white ',
		dot: 'text-black dark:text-white absolute bottom-0 left-1/2 sq-1.5 rounded-full bg-current in-flex -translate-x-1/2 transition-[background,transform] duration-[150ms,300ms]',
		defaultDot: 'scale-0 group-hover:scale-100',
		activeDot: 'scale-100'
	}

	const navLinks = [
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
	<nav class={cn(css.wrapper, hideMenu && css.hideWrapper)}>
		<ul class={css.menu}>
			{#each navLinks as { title, path }}
				<Magnetic tag="li" class={css.magnetic} power={30}>
					<a href={path} class={css.link}>
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
