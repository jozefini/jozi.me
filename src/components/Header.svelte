<script lang="ts">
	import { page } from '$app/stores'
	import { cn } from '$lib/utils/helpers'

	import Nav from './header/Nav.svelte'
	import Brand from './header/Brand.svelte'
	import Burger from './header/Burger.svelte'
</script>

<header class={cn('relative z-10', $page.url.pathname === '/' && 'dark')}>
	<div class="max-w-8xl mx-auto px-4 h-header flex justify-between items-center">
		<Brand />
		<Nav />
	</div>
	<Burger />
</header>
