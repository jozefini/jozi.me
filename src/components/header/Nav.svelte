<script lang="ts">
	import { ROUTE_PATHS } from '$lib/constants'
	import Magnetic from '$components/Magnetic.svelte'
	import { cn } from '$lib/utils/helpers'
	import { page } from '$app/stores'

	const css = {
		wrapper:
			'hidden md:flex fw-500 items-center gap-x-6 text-lg [&:hover_a:not(:hover)>*]:scale-0 text-black dark:text-white transition-colors',
		magnetic: 'in-flex centered',
		link: 'relative group px-4 py-2',
		dot: 'text-black dark:text-white absolute bottom-0 left-1/2 sq-1.5 rounded-full bg-current in-flex -translate-x-1/2 transition-[background_transform] duration-[150ms_300ms]',
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
	<ul class={css.wrapper}>
		{#each navLinks as { title, path }}
			<li>
				<Magnetic class={css.magnetic} power={30}>
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
			</li>
		{/each}
	</ul>
{/if}
