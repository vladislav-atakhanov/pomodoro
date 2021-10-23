export function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
	const angleInRadians = (angleInDegrees-90) * Math.PI / 180

	return {
		x: centerX + (radius * Math.cos(angleInRadians)),
		y: centerY + (radius * Math.sin(angleInRadians))
	}
}

export function describeArc(x, y, radius, startAngle, endAngle){
	let start = polarToCartesian(x, y, radius, endAngle),
		end = polarToCartesian(x, y, radius, startAngle)

	let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

	let d = [
		start.x, start.y,
		"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
	]

	return d.join(" ")
}

export function map(value, srcMin, srcMax, dstMin, dstMax) {
	return (value - srcMin) / (srcMax - srcMin) * (dstMax - dstMin) + dstMin
}

export function msToTime(duration, zero=false) {
	let	seconds = ((duration % 60000) / 1000).toFixed(0),
		minutes = Math.floor(duration / 60000)

	if (seconds >= 60) {
		seconds -= 60
		minutes++
	}


	if (zero) {
		minutes = (minutes < 10) ? "0" + minutes : minutes
		seconds = (seconds < 10) ? "0" + seconds : seconds
	}

	return {minutes, seconds}
}