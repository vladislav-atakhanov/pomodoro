<script>
import { describeArc } from "../utils";

let className
export { className as class }
export let progress = 0

$: petal = describeArc(100, 100, 90, 0, 359.9 * progress)
</script>
<svg viewBox="0 0 200 200" style="display: block" class={className}>
	<path
		d="M 99.8 10 A 90 90 0 1 0 100 10"
		stroke="var(--break-color)"
		fill="none"
		stroke-width="10"
		stroke-linecap="round"
	/>
	<path
		d="M {petal || '0 0'} L 100 100"
		fill="var(--break-color)"
	/>
</svg>