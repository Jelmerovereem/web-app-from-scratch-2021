import { leafletMap } from "../script.js";


/* set view of map */
export default function toMap(coordinates, temp) {
	leafletMap.setView(coordinates, 13);
	const marker = L.marker(coordinates).addTo(leafletMap);
	marker.bindPopup(`<b>Temperature</b><br>${temp}°C`).openPopup();
}