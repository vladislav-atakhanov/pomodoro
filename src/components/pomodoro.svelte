<script>
import WorkingCircle from "./working-circle.svelte"
import BreakCircle from "./break-circle.svelte"
import { msToTime } from "../utils"

export let timer
let working, break_, isWorking
$: {
	let breakTimeMax = $timer.time * (1 - $timer.isWorkingCondition)
	let workingTime = Math.max($timer.leftTime - breakTimeMax, 0)
	working = msToTime(workingTime, true)

	let breakTime = Math.min($timer.leftTime, breakTimeMax)
	break_ = msToTime(breakTime, true)

	isWorking = $timer.isWorking = $timer.leftTime > breakTimeMax
}


function click() {
	timer.change()
}
</script>


<div class="pomodoro pomodoro--{$timer.type} pomodoro--working-{isWorking}">
	<BreakCircle
		progress={$timer.value}
		class="pomodoro__circle pomodoro__circle--break"
	/>
	<WorkingCircle
		progress={$timer.value}
		class="pomodoro__circle pomodoro__circle--working"
		on:click={click}
	/>



	<div class="left-time__wrapper">
		<div class="left-time">
			<svg viewBox="0 0 13 14" class="left-time__marker" fill="currentColor">
				<path d="M11.792 5.24532C13.179 6.00397 13.179 7.99603 11.792 8.75468L3.70974 13.1754C2.37694 13.9044 .75 12.9398 .75 11.4207L.75 2.57932C.75 1.06017 2.37694 .0956483 3.70974 .824643L11.792 5.24532Z"/>
			</svg>
			<p class="left-time__value left-time__value--working">{working.minutes}:{working.seconds}</p>
			<p class="left-time__value left-time__value--break">{break_.minutes}:{break_.seconds}</p>
		</div>
	</div>
</div>

<style>
.pomodoro {
	width: 90%;
	max-width: 250px;
	display: grid;
	position: relative;
}
.left-time__wrapper {
	position: absolute;
	top: 100%;
	width: 100%;
	padding: .5em;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.left-time__value {
	margin: 0;
	transition: 0.5s all;
}
.left-time {
	position: relative;
	display: grid;
	grid-gap: .5em;
	line-height: 1;
	font-size: 24px;
	color: rgb(0 0 0 / .5);
}
.left-time__marker {
	content: ">";
	position: absolute;
	margin-left: -1em;
	height: .5em;
	top: .25em;
	left: 0;
	transition: 0.5s all;
}
.pomodoro--working-false .left-time__marker {
	transform: translateY(1.5em);
}
.pomodoro--working-true .left-time__value--working {
	color: var(--working-color);
}
.pomodoro--working-false .left-time__value--break {
	color: var(--break-color);
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