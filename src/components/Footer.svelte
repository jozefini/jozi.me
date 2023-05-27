<script lang="ts">
	import { ROUTE_PATHS } from '$lib/constants'
	import Magnetic from './Magnetic.svelte'

	const email = 'jozibashaj@gmail.com'

	const css = {
		wrapper: 'sticky top-[100vh] bg-footer text-white',
		inner: 'max-w-6xl mx-auto px-4 py-40',
		title: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl fw-700 font-secondary',
		ctaWrapper: 'relative h-32 sm:h-40 md:h-44 flex items-center',
		ctaLine: 'border-t border-white/10 w-full',
		ctaBtnBox: 'absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2',
		ctaBtn:
			'sq-28 sm:sq-36 md:sq-48 rounded-full in-flex centered bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm sm:text-base md:text-lg',
		socialBtn:
			'in-flex fw-400 centered rounded-full h-16 sm:h-18 md:h-20 px-6 sm:px-8 md:px-10 border border-white/10 transition-colors hover:border-blue-600'
	}
</script>

<footer class={css.wrapper}>
	<div class={css.inner}>
		<h2 class={css.title}>Let's talk</h2>

		<div class={css.ctaWrapper}>
			<div class={css.ctaLine} />
			<div class={css.ctaBtnBox}>
				<Magnetic
					tag="a"
					class={css.ctaBtn}
					href={ROUTE_PATHS.contact}
					power={60}
					perspective={0.5}
					let:style
				>
					<span {style}>Get in touch</span>
				</Magnetic>
			</div>
		</div>

		<Magnetic
			tag="a"
			href="mailto:{email}"
			class={css.socialBtn}
			power={30}
			perspective={0.5}
			let:style
		>
			<span {style} class="text-sm sm:text-base md:text-lg"> Send an email </span>
		</Magnetic>
	</div>
</footer>
