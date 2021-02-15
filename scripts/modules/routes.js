export default function routes() {
	const mainPage = document.querySelector(".main");
	const detailPage = document.querySelector(".detail");

	routie("", () => {
		mainPage.classList.remove("hidden");
		detailPage.classList.add("hidden");
	})

	routie("detailpagina/:cityName", (cityName) => {
		mainPage.classList.add("hidden");
		detailPage.classList.remove("hidden");
		document.querySelector(".cityName").innerText = cityName;
	})	
}