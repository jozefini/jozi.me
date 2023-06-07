<script lang="ts">
	import Nav from './header/Nav.svelte'
	import Brand from './header/Brand.svelte'
	import Burger from './header/Burger.svelte'

	const css = {
		wrapper: 'relative z-10',
		inner: 'max-w-8xl mx-auto px-4 h-header flex justify-between items-center'
	}
</script>

<header class={css.wrapper}>
	<div class={css.inner}>
		<Brand />
		<Nav />
	</div>
	<Burger />
</header>
