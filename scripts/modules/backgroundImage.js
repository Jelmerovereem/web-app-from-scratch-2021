import { fetchData } from "../modules/fetchData.js";
import { detailPage } from "../modules/renderDetailPage.js";


export default function insertBackground(cityName, weatherDesc) {
	const imageSourceAnchor = document.querySelector(".imageSrc a");

	function randomInt(max) {
		return Math.floor(Math.random() * max);
	}

	fetchData(`https://api.unsplash.com/search/photos/?client_id=KaEop62a4wAL4dmxCd_bv_2JiB7So3-qM1sWEU0AV-0&query=${cityName}&orientation=portrait&per_page=30`)
	.then((data) => {
		let randomCijfer = randomInt(data.results.length);
		let image = data.results[randomCijfer].urls.full;
		imageSourceAnchor.href = data.results[randomCijfer].user.links.html;
		imageSourceAnchor.innerText = data.results[randomCijfer].user.first_name;
		if (weatherDesc === "snow" || weatherDesc === "clouds") {
			detailPage.style.background = `linear-gradient(to bottom, rgba(97,132,186,0.8), rgba(143,169,206,0.8)), url(${image}) no-repeat center`;
		} else if (weatherDesc === "drizzle" || weatherDesc === "rain") {
			detailPage.style.background = `linear-gradient(to bottom, rgba(89,106,132,0.8), rgba(117,133,149,0.8)), url(${image}) no-repeat center`;
		} else {
			detailPage.style.background = `linear-gradient(to bottom, rgba(22,119,210,0.8), rgba(107,165,228,0.8)), url(${image}) no-repeat center`;
		}
		detailPage.style.backgroundSize = "cover";
		//detailPage.style.background = `url(${data.results[0].urls.full}) center`;
	})
}