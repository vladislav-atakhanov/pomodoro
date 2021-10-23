export default class Canvas {
	constructor(canvas) {
		this.canvas = canvas
		const ctx = this.ctx = canvas.getContext("2d")

		ctx.clear = () => {
			ctx.save()
			ctx.globalCompositeOperation = 'destination-out'
			ctx.fill()
			ctx.restore()
		}
	}

	get width() {
		return this.canvas.width
	}
	set width(value) {
		this.canvas.width = value
	}

	get height() {
		return this.canvas.height
	}
	set height(value) {
		this.canvas.height = value
	}

	fill(color) {
		this.ctx.fillStyle = color
		this.ctx.fillRect(0, 0, this.width, this.height)
	}

}