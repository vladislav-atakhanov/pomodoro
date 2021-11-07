const types = {
	workend: {
		title: "Отдыхать"
	},
	end: {
		title: "Помидор закончился"
	},
	start: {
		title: "Проверка"
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

	_requestPermission(type) {
		Notification.requestPermission(permission => {
			if (!Notification.permission)
				Notification.permission = permission

			if (permission === "granted")
				this._notify(type)
		})
	},

	init() {
		if (Notification.permission === "granted")
			return

		Notification.requestPermission(permission => {
			if (!Notification.permission)
				Notification.permission = permission
		})
	},

	notify(type) {
		if ('Notification' in window) {
			if (Notification.permission === 'granted')
				this._notify(type)
			else
				this._requestPermission(type)
		}
	}
}