import addSnow from "../modules/snow.js";
import rain from "../modules/rain.js";
import { fetchData } from "../modules/fetchData.js";
import insertBackground from "../modules/backgroundImage.js";


export const detailPage = document.querySelector(".detail");

export default function renderDetailPage(data) {
	const cloud = document.querySelector(".cloud");
	const updatedText = document.querySelector(".updatedText");
	const tempEl = document.querySelector(".temp");
	const weatherDescEl = document.querySelector(".weatherDesc");

	console.log(data)
	const cityTime = new Date();
	cityTime.setHours(cityTime.getUTCHours() + (data.timezone/3600));
	console.log(cityTime)


	const cityHours = cityTime.getHours();

	const isDayTime = cityHours > 6 && cityHours < 20; // https://stackoverflow.com/a/46908558
	

	const weatherDesc = data.weather[0].main.toLowerCase();
	weatherDescEl.innerText = weatherDesc;
	cloud.src = `assets/cloud-${weatherDesc}.png`;

	insertBackground(data.name, weatherDesc);

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
		cloud.src = `assets/cloud-dark.png`;
	}

	updatedText.innerText = `Laatst geüpdate op ${new Date().getHours()}:${new Date().getMinutes()<10?"0":""}${new Date().getMinutes()}`;
	tempEl.innerText = `${parseInt(data.main.temp)}°C`;
}