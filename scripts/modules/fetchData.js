import { apikey } from "../utilities/key.js";
import { errMsg } from "../utilities/renderUtils.js";
import showErr from "../modules/showError.js";

export {getWeatherCity, getWeatherCoords}

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const units = "metric";

/* fetch weather data from openweather api based on city name */
function getWeatherCity(city) {
	return fetch(`${baseUrl}?q=${city}&units=${units}&appid=${apikey}`)
	.then((response) => {
		if (response.ok) {
			errMsg.classList.remove("showError");
			return response.json();
		} else {
			showErr();
		}
	})
}

/* fetch weather data from openweather api based on coords */
function getWeatherCoords(lat, lon) {
	return fetch(`${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&appid=${apikey}`)
	.then(response => response.ok ? response.json() : console.log(response.ok))
}