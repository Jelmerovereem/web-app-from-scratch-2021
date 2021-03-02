import { getWeatherCity } from "../modules/fetchData.js";

export default async function getAverage() {
	const cities = ["Amsterdam", "Utrecht", "Maastricht", "Groningen", "'s-Hertogenbosch"];
	const tempArrays = [];
	
	for (const city of cities) {
		let data = await getWeatherCity(city);
		tempArrays.push(data.main.temp);
	}

	document.querySelector(".average").innerText = `Gemiddelde temperatuur in Nederland: ${Math.round(tempArrays.reduce((total, number) => total + number, 0) / tempArrays.length)}°C`;
}