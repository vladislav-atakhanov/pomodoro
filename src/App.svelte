<script>
import { timer } from "./store"
import Pomodoro from "./components/pomodoro.svelte"
import Pause from "./components/pause.svelte"
</script>

<div
	class="
		app
		app--{$timer.isWorking ? 'working' : 'break'}
	"
>
	<Pomodoro {timer} />
	<Pause isPaused={$timer.isPaused} />
</div>

<style>
.app {
	position: relative;
	padding-left: 1em;
	padding-right: 1em;

	gap: 1em;

	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 0.5s;
}

.app--working {
	background: var(--working-background)
}
.app--break {
	background: var(--break-background);
}
</style>