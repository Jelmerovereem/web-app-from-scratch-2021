import { leafletMap } from "../utilities/mapUtils.js";
import { searchInput } from "../utilities/searchUtils.js";

const iconsUrl = `http://openweathermap.org/img/wn/`;

/* set view of map */
export default function toMap(data) {
	const coordinates = data.coord;
	const temp = Math.round(data.main.temp);
	const city = data.name;
	const icon = data.weather[0].icon;
	leafletMap.setView(coordinates, 13);
	const marker = L.marker(coordinates).addTo(leafletMap);
	const markerHtml = `
		<div class="temp-header">
			<span>${temp}°C</span>
			<img src="${iconsUrl}${icon}@2x.png" class="weatherIcon" alt="weather-icon">
		</div>
		<p><a href="#detailpagina/${city}">${city}</a></p>
	`;
	marker.bindPopup(markerHtml).openPopup();
	searchInput.value = city;
}