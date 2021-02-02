const apikey = "5c8601ba0008d71d05e037ba2a55d3c9";
const mapboxAccessToken = "pk.eyJ1IjoiamVsbWVyb3ZlcmVlbSIsImEiOiJja2c3MDVoaTkwMm1sMnVwbThzMXhudTZxIn0.dSnLS_yVbd3-BkeOiEpvYw";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const units = "metric";
const searchInput = document.querySelector(".searchCity");
const getLocationBtn = document.querySelector(".getLocation");
const searchBtn = document.querySelector(".searchBtn");
const tempCell = document.querySelector(".tempCell");


function getWeatherCoords(lat, lon) {
	return fetch(`${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&appid=${apikey}`)
	.then(response => response.ok ? response.json() : console.log(response.ok))
}

function getWeatherCity(city) {
	return fetch(`${baseUrl}?q=${city}&units=${units}&appid=${apikey}`)
	.then(response => response.ok ? response.json() : console.log(response.ok))
}

const leafletMap = L.map("map").setView([50,2], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
	tileSize: 512,
	zoomOffset: -1,
	accessToken: mapboxAccessToken
}).addTo(leafletMap);

const popup = L.popup();

function onMapClick(e) {
	getCoords(e.latlng.lat, e.latlng.lng);
}

leafletMap.on("click", onMapClick);

function toMap(coordinates, temp) {
	leafletMap.setView(coordinates, 13);
	const marker = L.marker(coordinates).addTo(leafletMap);
	marker.bindPopup(`<b>Temperature</b><br>${temp}°C`).openPopup();
}

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

getLocationBtn.addEventListener("click", getLocation);


function getCoords(lat, lon) {
	getWeatherCoords(lat, lon)
	.then((data) => {
		tempCell.innerText = `${data.main.temp}°C`;
		toMap(data.coord, data.main.temp);
	})
	.catch(err => console.log(err))
}

function getCity() {
	getWeatherCity(searchInput.value)
	.then((data) => {
		tempCell.innerText = `${data.main.temp}°C`;
		toMap(data.coord, data.main.temp);
	})
	.catch(err => console.log(err))
}

searchBtn.addEventListener("click", getCity);

//mobile section

const mobileSearchBtn = document.querySelector(".searchBtnMobile");
const mobileSearchInput = document.querySelector(".searchCityMobile");

const mobileLeafletMap = L.map("mobileMap").fitWorld();
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mobileLeafletMap);


function onLocationFound(e) {
	const radius = e.accuracy;

	L.marker(e.latlng).addTo(mobileLeafletMap)
		.bindPopup(radius);

	L.circle(e.latlng, radius).addTo(mobileLeafletMap)
}

function onLocationError(e) {
	alert(e.message);
}

mobileLeafletMap.on("locationfound", onLocationFound);
mobileLeafletMap.on("locationerror", onLocationError);

mobileLeafletMap.locate({setView: true, maxZoom:16});


function mobileMap(coords) {
	mobileLeafletMap.setView(coords, 13);
}

function getMobileData() {
	console.log("clicked")
	getWeatherCity(mobileSearchInput.value)
	.then((data) => {
		console.log(data)
		mobileMap(data.coord)
	})
}

mobileSearchBtn.addEventListener("click", getMobileData);