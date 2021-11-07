import { Timer } from "./timer"
import { Stats } from "./stats"
import { Keyboard } from "./keyboard"
import { Notificator } from "./notificator"

export let timer = new Timer()
export let stats = new Stats(0)

// Notificator.opts = {debug: true}

const workingTimer = [
	30 * 60 * 1000, {
		isWorking: 5 / 6,
		type: "working"
	}
]

const breakTimer = [
	15 * 60 * 1000, {
		isWorking: 0,
		type: "break"
	}
]

Notificator.init()

timer.init(...workingTimer)

timer.onworkend = event => {
	Notificator.notify(event.type)
}
const cycleLength = 5
timer.onend = event => {
	let complited = ++stats.value % cycleLength
	if (complited == cycleLength - 1)
		timer.init(...breakTimer).start()
	else
		timer.init(...workingTimer)

	Notificator.notify(event.type)
}

Keyboard.init({
	Space: () => timer.change()
})