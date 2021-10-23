const types = {
	workend: {
		title: "Отдыхать"
	},
	end: {
		title: "Помидор закончился"
	}
}

export let Notificator = {
	opts: {},
	_notify(type) {
		const notification = types[type]
		if (!notification)
			return
		const title = notification.title
		const opts = notification.opts || {}

		if (this.opts.debug)
			console.log(title, opts)
		else
			new Notification(title, opts)
	},

	notify(type) {
		if ('Notification' in window) {
			if (Notification.permission === 'granted') {
				this._notify(type)
			} else if (Notification.permission === 'denied') {
				Notification.requestPermission(permission => {
					if (!Notification.permission)
						Notificator.permission = permission

					if (permission === "granted")
						this._notify(type)
				})
			}
		}
	}
}