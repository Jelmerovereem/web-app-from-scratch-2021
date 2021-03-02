import addSnow from "../modules/snow.js";
import rain from "../modules/rain.js";
import { fetchData } from "../modules/fetchData.js";

export const detailPage = document.querySelector(".detail");

export default function renderDetailPage(data) {
	const cloud = document.querySelector(".cloud");
	const updatedText = document.querySelector(".updatedText");
	const tempEl = document.querySelector(".temp");
	const weatherDescEl = document.querySelector(".weatherDesc");
	const sunOrMoon = document.querySelector(".sunOrMoon");

	const cityTime = new Date();
	cityTime.setHours(cityTime.getUTCHours() + (data.timezone/3600));

	const cityHours = cityTime.getHours();

	const isDayTime = cityHours > 6 && cityHours < 20; // https://stackoverflow.com/a/46908558
	
	if (isDayTime) {
		sunOrMoon.src = "assets/sun.png";
	} else {
		sunOrMoon.src = "assets/moon.png";
	}

	const weatherDesc = data.weather[0].main.toLowerCase();
	weatherDescEl.innerText = weatherDesc;

	if (document.querySelector("#sky")) {
		document.querySelector("#sky").remove();
	}
	if (document.querySelector(".rain")) {
		document.querySelector(".rain").remove();
	}

	if (weatherDesc === "snow") {
		const canvasEl = document.createElement("canvas");
		canvasEl.id = "sky";
		detailPage.appendChild(canvasEl);
		addSnow() // https://www.cssscript.com/basic-snowflakes-falling-effect-javascript-canvas-snow-js/
	}

	if (weatherDesc === "drizzle" || weatherDesc === "rain") {
		detailPage.insertAdjacentHTML("afterbegin", `<div class="rain"></div>`);
		rain()
	}

	if (weatherDesc === "snow" || weatherDesc === "clouds") {
		detailPage.style.background = `linear-gradient(to bottom, rgba(97,132,186,0.8), rgba(143,169,206,0.8))`;
	} else if (weatherDesc === "drizzle" || weatherDesc === "rain") {
		detailPage.style.background = `linear-gradient(to bottom, rgba(89,106,132,0.8), rgba(117,133,149,0.8))`;
	} else {
		detailPage.style.background = `linear-gradient(to bottom, rgba(22,119,210,0.8), rgba(107,165,228,0.8))`;
	}

	updatedText.innerText = `Laatst geüpdate op ${new Date().getHours()}:${new Date().getMinutes()<10?"0":""}${new Date().getMinutes()}`;
	tempEl.innerText = `${parseInt(data.main.temp)}°C`;
}