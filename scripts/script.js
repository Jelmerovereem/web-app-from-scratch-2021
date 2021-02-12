import { getWeatherCity, getWeatherCoords } from "./modules/fetchdata.js";
import { apikey, mapboxAccessToken } from "./utilities/key.js";
import { errMsg } from "./utilities/renderUtils.js";
import toMap from "./modules/renderToMap.js";

/* Initiated variables */

const searchInput = document.querySelector(".searchCity");
const getLocationBtn = document.querySelector(".getLocation");
const searchBtn = document.querySelector(".searchBtn");
const tempCell = document.querySelector(".tempCell");


/* Init leaflet map */
export const leafletMap = L.map("map", {zoomControl: false}).setView([52.2351,5.2294], 5);
L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
	tileSize: 512,
	zoomOffset: -1,
	accessToken: mapboxAccessToken
}).addTo(leafletMap);

L.control.zoom({position: "bottomright"}).addTo(leafletMap)

const popup = L.popup();

function onMapClick(e) {
	getCoords(e.latlng.lat, e.latlng.lng);
}

/* ask visitor for location access and push location to showPosition() */
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("this browser does not support")
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

leafletMap.on("click", onMapClick);
leafletMap.on("move", () => {leafletMap.invalidateSize();})
getLocationBtn.addEventListener("click", getLocation);
searchBtn.addEventListener("click", getCity);

const mainPage = document.querySelector(".main");
const detailPage = document.querySelector(".detail");

routie("", () => {
	mainPage.classList.remove("hidden");
	detailPage.classList.add("hidden");
})

routie("detailpagina/:cityName", (cityName) => {
	mainPage.classList.add("hidden");
	detailPage.classList.remove("hidden");
	const city = cityName.replace(":", "");
	document.querySelector(".cityName").innerText = city;
})