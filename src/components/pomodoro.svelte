<script>
import WorkingCircle from "./working-circle.svelte"
import BreakCircle from "./break-circle.svelte"
import { msToTime } from "../utils";

export let timer

$: time = msToTime($timer.leftTime, true)

function click() {
	timer.change()
}
</script>


<div class="pomodoro pomodoro--{$timer.type}">
	<BreakCircle
		progress={$timer.value}
		class="pomodoro__circle pomodoro__circle--break"
	/>

	<WorkingCircle
		progress={$timer.value}
		class="pomodoro__circle pomodoro__circle--working"
		on:click={click}
	/>

	{time.minutes}:{time.seconds}
</div>

<style>
.pomodoro {
	width: 90%;
	max-width: 250px;
	display: grid;
}
:global(.pomodoro__circle) {
	opacity: 0;
	grid-area: 1 / 1 / -1 / -1;
	transition: .5s all;
	align-self: center;
}
:global(.pomodoro__circle--working) {
	z-index: 1;
}

.pomodoro--working :global(.pomodoro__circle--working) {
	opacity: 1;
}
.pomodoro--break :global(.pomodoro__circle--break) {
	opacity: 1;
}

</style>