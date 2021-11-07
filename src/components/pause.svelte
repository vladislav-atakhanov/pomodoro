<script>
export let isPaused
</script>

<div class="pause {isPaused && 'pause--visible'}">
	<div class="pause__icon"></div>
</div>

<style>
.pause {
	opacity: 0;
	pointer-events: none;
	position: absolute;
	top: 0; left: 0;
	bottom: 0; right: 0;
	background: var(--overlay-background);
	color: var(--overlay-color);
	z-index: 1;
	transition: all .5s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.pause__icon {
	display: flex;
	gap: 1em;
}
.pause__icon::before, .pause__icon::after {
	content: "";
	width: 1em;
	height: 4em;
	background-color: currentColor;
	border-radius: .3em;
}

.pause--visible {
	opacity: 1;
}
</style>