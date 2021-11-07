import { writable } from "svelte/store"

export class Stats {

	/**
	 *
	 * @param {number} timeInMs
	 * @param {{debug: boolean}} opts
	 */
	constructor() {
		this._store = writable(this.value)
		this.subscribe = this._store.subscribe
		this.update = this._store.update
	}
	get _id() {
		let date = new Date()
		return [
			date.getFullYear(),
			date.getMonth(),
			date.getDate()
		].join("-")
	}
	get stats() {
		return JSON.parse(localStorage.getItem("stats") || "{}")
	}
	set stats(value) {
		localStorage.setItem("stats", JSON.stringify(value))
	}
	set value(_value) {
		const stats = this.stats
		this.update(() => _value)
		stats[this._id] = _value
		this.stats = stats
	}
	get value() {
		return this.stats[this._id] || 0
	}
}