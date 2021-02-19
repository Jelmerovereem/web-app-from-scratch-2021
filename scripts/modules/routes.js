import { getWeatherCity } from "../modules/fetchData.js";
import renderDetailPage from "../modules/renderDetailPage.js";

export default function routes() {
	const mainPage = document.querySelector(".main");
	const detailPage = document.querySelector(".detail");

	routie("", () => {
		mainPage.classList.remove("hidden");
		detailPage.classList.add("hidden");
	})

	routie("detailpagina/:cityName", async (cityName) => {
		mainPage.classList.add("hidden");
		detailPage.classList.remove("hidden");
		document.querySelector(".cityName").innerText = cityName;
		const updatedText = document.querySelector(".updatedText");
		const tempEl = document.querySelector(".temp");
		
		setTimeout(() => {	
			updatedText.classList.add("full");
			updatedText.innerText = "updating...";
		}, 100);
		
		tempEl.innerText = "°C";

		setTimeout(async () => {
			// geschreven m.b.v. github.com/theonejonahgold
			const data = await getWeatherCity(cityName).catch(err => console.log(err));
			renderDetailPage(data);
		}, 1000)
	})	
}