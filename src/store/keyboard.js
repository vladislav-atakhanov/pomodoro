export let Keyboard = {
	opts: {},

	init(handlers={}) {
		addEventListener("keyup", e => {
			if (this.opts && this.opts.debug)
				console.log(e.code)

			handlers[e.code] && handlers[e.code]()
		})
	}
}