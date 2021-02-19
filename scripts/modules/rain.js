export default function rain() {
	// https://codepen.io/aureliendotpro/pen/hAxGg
	// number of drops
	const amountDrops = 100;

	// random generator
	function randomRange(min, max) {
		return (Math.floor(Math.random() * (max - min + 1)) + min);
	}

	// generate drops
	async function createRain() {
		for (var i = 0; i < amountDrops; i++) {
			let dropLeft = randomRange(0, 100);
			let dropTop = randomRange(-100, 100);
			await document.querySelector(".rain").insertAdjacentHTML("afterbegin", `<div class="drop" id="drop${i}"></div>`);

			document.querySelector(`#drop${i}`).style.left = dropLeft + "vw";
			document.querySelector(`#drop${i}`).style.top = dropTop + "vh";
		}
	}

	createRain();
}