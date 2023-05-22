<script lang="ts">
	import { ROUTE_PATHS } from '$lib/constants'
	import Magnetic from './Magnetic.svelte'

	const email = 'jozibashaj@gmail.com'
</script>

<footer class="sticky top-[100vh] bg-footer text-white">
	<div class="max-w-6xl mx-auto px-4 py-40">
		<h2 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl fw-700 font-secondary">Let's talk</h2>
		<div class="relative h-32 sm:h-40 md:h-44 flex items-center">
			<div class="border-t border-white/10 w-full" />
			<div class="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2">
				<Magnetic power={60} perspective={0.5} let:style>
					<a
						href={ROUTE_PATHS.contact}
						class="sq-28 sm:sq-36 md:sq-48 rounded-full in-flex centered bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm sm:text-base md:text-lg"
					>
						<span {style}>Get in touch</span>
					</a>
				</Magnetic>
			</div>
		</div>
		<Magnetic class="in-flex" power={30} perspective={0.5} let:style>
			<a
				href="mailto:{email}"
				class="in-flex fw-400 centered rounded-full h-16 sm:h-18 md:h-20 px-6 sm:px-8 md:px-10 border border-white/10 transition-colors hover:border-blue-600"
			>
				<span {style} class="text-sm sm:text-base md:text-lg"> Send an email </span>
			</a>
		</Magnetic>
	</div>
</footer>
