import routes from "./modules/routes.js";
import { leafletMap, popup } from "./utilities/mapUtils.js";
import { getWeatherCity, getWeatherCoords } from "./modules/fetchData.js";
import { searchInput, getLocationBtn, searchBtn } from "./utilities/searchUtils.js";
import { apikey, mapboxAccessToken } from "./utilities/key.js";
import { errMsg } from "./utilities/renderUtils.js";
import toMap from "./modules/renderToMap.js";

function onMapClick(e) {
	getCoords(e.latlng.lat, e.latlng.lng);
}

/* ask visitor for location access and push location to showPosition() */
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("This browser does not support geolocation");
	}
}

function showPosition(position) {
	getCoords(position.coords.latitude, position.coords.longitude)
}

function getCoords(lat, lon) {
	getWeatherCoords(lat, lon)
	.then((data) => {
		toMap(data);
	})
	.catch(err => console.log(err))
}

function getCity() {
	const city = searchInput.value;
	getWeatherCity(city)
	.then((data) => {
		console.log(data)
		toMap(data);
	})
	.catch(err => console.log(err))
}

function initEventListeners() {
	leafletMap.on("click", onMapClick);
	leafletMap.on("move", () => {leafletMap.invalidateSize();})
	getLocationBtn.addEventListener("click", getLocation);
	searchBtn.addEventListener("click", getCity);
}

initEventListeners();
routes();