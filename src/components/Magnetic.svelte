<script>
	import { tweened } from 'svelte/motion'
	import { cubicOut, elasticOut } from 'svelte/easing'

	export let duration = 1000
	export let power = 100
	export let perspective = 1
	export let tag = 'div'

	let el
	const optIn = { duration, easing: cubicOut }
	const optOut = { duration, easing: elasticOut }
	const x = tweened(0, optIn)
	const y = tweened(0, optIn)

	const onMouseMove = ({ clientX, clientY }) => {
		const { left, top } = el.getBoundingClientRect()

		x.set(((clientX - left) / el.offsetWidth - 0.5) * power)
		y.set(((clientY - top) / el.offsetHeight - 0.5) * power)
	}

	const onMouseLeave = () => {
		x.set(0, optOut)
		y.set(0, optOut)
	}
	// Get class from parent component
</script>

<svelte:element
	this={tag}
	bind:this={el}
	on:mousemove={onMouseMove}
	on:mouseleave={onMouseLeave}
	style="transform: translate({$x}px, {$y}px)"
	{...$$restProps}
>
	<slot x={$x} y={$y} style="transform: translate({$x * perspective}px, {$y * perspective}px)" />
</svelte:element>
