<script>
	import Magnetic from '../Magnetic.svelte'

	const css = {
		magnetic: 'in-flex centered',
		icon: 'w-9 sm:w-10 text-black dark:text-white transition-colors'
	}
</script>

<Magnetic class={css.magnetic} power={30}>
	<a href="/">
		<svg class={css.icon} viewBox="0 0 26.46 26.46" xmlns="http://www.w3.org/2000/svg">
			<path
				stroke="currentColor"
				stroke-width="1.2"
				fill="none"
				d="m7 3.45 4.75-2.37 4.75 2.37v7.13l4.75 2.37v7.13l-4.75 2.37v-7.12l-4.75-2.38V5.83z"
			/>
			<path fill="currentColor" d="m5.31 4.38 4.75 2.37V21l4.75 2.38-4.75 2.37-4.75-2.38z" />
		</svg>
	</a>
</Magnetic>
