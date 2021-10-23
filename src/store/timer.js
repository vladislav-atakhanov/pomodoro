import { writable } from "svelte/store"

export class Timer {

	/**
	 *
	 * @param {number} timeInMs
	 * @param {{debug: boolean}} opts
	 */
	constructor() {
		this._store = writable({
			isPaused: null,
			value: null,
			isWorking: null,
			leftTime: null,
			type: null
		})

		this.subscribe = this._store.subscribe
		this.update = this._store.update

		this._eventListeners = {}
	}

	init(timeInMs, opts={}) {
		this.opts = opts
		this._time = timeInMs

		this.update(store => {
			store.value = 0
			store.isPaused = false
			store.type = opts.type

			this.value = 0

			return store
		})

		if (this.isStarted && !this.isPaused)
			this._startInterval()

		return this
	}

	onstart(){}
	onend(){}
	onpause(){}
	onunpause(){}
	onworkstart(){}
	onworkend(){}


	/**
	 * @param {string} type
	 * @param {function} listener - callback-function on event dispached
	 * @return listener
	 */
	addEventListener(type, listener) {
		if (!this._eventListeners[type])
			this._eventListeners[type] = []

		this._eventListeners[type].push(listener)
		return listener
	}

	_dispatchEvent(type) {
		if (this.opts.debug)
			console.log("event " + type)

		const event = {
			type, target: this
		}

		this._eventListeners[type] && this._eventListeners[type].forEach(listener => listener(event))
		if (this["on"+type])
			this["on"+type](event)
	}


	set isStarted(value) {localStorage.setItem("isStarted", JSON.stringify(value))}
	get isStarted() {return JSON.parse(localStorage.getItem("isStarted"))}

	set isPaused(value) {
		localStorage.setItem("isPaused", JSON.stringify(value))
		this.update(store => {
			store.isPaused = value
			return store
		})
	}
	get isPaused() {return JSON.parse(localStorage.getItem("isPaused"))}

	set startTime(value) {localStorage.setItem("startTime", JSON.stringify(value))}
	get startTime() {return JSON.parse(localStorage.getItem("startTime"))}

	set endTime(value) {localStorage.setItem("endTime", JSON.stringify(value))}
	get endTime() {return JSON.parse(localStorage.getItem("endTime"))}

	set pausedTime(value) {localStorage.setItem("pausedTime", JSON.stringify(value))}
	get pausedTime() {return JSON.parse(localStorage.getItem("pausedTime"))}

	set value(value) {
		this.isWorking = value < this.opts.isWorking
		let prevIsWorking

		this.update(store => {
			prevIsWorking = store.isWorking

			store.value = value
			store.isWorking = this.isWorking
			store.leftTime = this._time * (1 - value)

			return store
		})

		if (prevIsWorking != this.isWorking)
			this._dispatchEvent(this.isWorking ? "workstart" : "workend")
	}
	get value() {
		const time = this.isPaused ? this.pausedTime : Date.now()
		const value = (time - this.startTime) / (this.endTime - this.startTime)

		if (value >= 1) {
			this.value = 1
			this.end()
			return
		}

		this.value = value
		return value
	}

	_frame() {
		const value = this.value
		if (value < 1)
			this._interval = requestAnimationFrame(this._frame.bind(this))
	}

	_stopInterval() {
		cancelAnimationFrame(this._interval)
	}
	_startInterval() {
		this._frame()
	}

	start() {
		this.isStarted = true

		this.startTime = Date.now()
		this.endTime = this.startTime + this._time

		this._startInterval()
		this._dispatchEvent("start")
		return this
	}

	end() {
		this.value = 1
		this.isStarted = false
		this._stopInterval()
		this._dispatchEvent("end")
		return this
	}

	pause() {
		this.isPaused = true
		this.pausedTime = Date.now()
		this._stopInterval()
		this._dispatchEvent("pause")
		return this
	}

	unpause() {
		this.isPaused = false
		this.startTime = this.startTime + Date.now() - this.pausedTime
		this.endTime = this.endTime + Date.now() - this.pausedTime
		this.pausedTime = 0
		this._startInterval()
		this._dispatchEvent("unpause")
		return this
	}

	// TODO
	// Придумать нормальное название функции
	change() {
		if (this.isPaused)
			this.unpause()
		else if (this.isStarted) {
			if (this.isWorking)
				this.pause()
		}
		else
			this.start()

		return this
	}
}