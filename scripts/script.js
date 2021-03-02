import routes from "./modules/routes.js";
import { leafletMap, popup } from "./utilities/mapUtils.js";
import { getWeatherCity, getWeatherCoords } from "./modules/fetchData.js";
import { searchInput, getLocationBtn, searchBtn } from "./utilities/searchUtils.js";
import { apikey, mapboxAccessToken } from "./utilities/key.js";
import { errMsg } from "./utilities/renderUtils.js";
import toMap from "./modules/renderToMap.js";
import getAverage from "./modules/getAverage.js";

async function onMapClick(e) {
	const weatherData = await getCoords(e.latlng.lat, e.latlng.lng);
	toMap(weatherData);
}

/* ask visitor for location access and push location to showPosition() */
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("This browser does not support geolocation");
	}
}

async function showPosition(position) {
	const weatherData = await getCoords(position.coords.latitude, position.coords.longitude);
	toMap(weatherData);
}

async function getCoords(lat, lon) {
	const weatherData = await getWeatherCoords(lat, lon).catch(err => console.log(err));
	return weatherData;
}

async function getCity() {
	const city = searchInput.value;
	const cityWeatherData = await getWeatherCity(city).catch(err => console.log(err));
	toMap(cityWeatherData);
}

function initEventListeners() {
	leafletMap.on("click", onMapClick);
	leafletMap.on("move", () => {leafletMap.invalidateSize();})
	getLocationBtn.addEventListener("click", getLocation);
	searchBtn.addEventListener("click", getCity);
}

initEventListeners();
routes();