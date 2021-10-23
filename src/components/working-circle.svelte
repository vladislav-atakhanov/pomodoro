<script>
import { createEventDispatcher } from 'svelte';
import { describeArc, map } from "../utils";

const dispatch = createEventDispatcher()

let className
export { className as class }
export let progress = 0

let pomodoro, petal
$: {
	let angle = progress * 360
	pomodoro = describeArc(100, 106, 95, 0, angle > 300 ? 300 : angle, true)

	if (angle >= 300) {
		const _angle = map(angle, 300, 360, 0, 1)
		petal = describeArc(
			91, 90, 85,
			-60,
			60 * _angle - 60
		)
	} else {
		petal = null
	}
}

</script>
<svg viewBox="0 0 200 206" style="display: block" class={className} on:click={() => dispatch("click")}>
	<path
		d="M 15.4 62.9 A 95 95 0 1 0 105 11.1"
		fill="none"
		stroke-width="10"
		stroke="var(--working-color)"
		stroke-linecap="round"
	/>

	<path
		d="M 86 5.15 A 85 85 0 0 0 20 43.2"
		fill="none"
		stroke-width="10"
		stroke="var(--break-color)"
		stroke-linecap="round"
	/>

	<path
		d="M {pomodoro || '0 0'} L 100 106"
		fill="var(--working-color)"
	/>

	<path
		d="M {petal || '0 0'} L 91 90"
		fill="var(--break-color)"
	/>
</svg>