import { Timer } from "./timer"
import { Keyboard } from "./keyboard"
import { Notificator } from "./notificator"
import { writable } from "svelte/store"

export let timer = new Timer()
export let completed = writable(0)

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

timer.init(...workingTimer)

timer.onworkend = event => {
	Notificator.notify(event.type)
}
timer.onend = event => {
	let completedCount
	completed.update(store => {
		completedCount = store + 1
		return completedCount
	})

	if (completedCount % 4 == 0)
		timer.init(...breakTimer).start()
	else if (completedCount != 1 && completedCount % 4 == 1)
		timer.init(...workingTimer)

	Notificator.notify(event.type)
}

Keyboard.init({
	Space: () => timer.change()
})