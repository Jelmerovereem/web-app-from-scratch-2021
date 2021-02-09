import { errMsg } from "../utilities/renderUtils.js";

export default function showErr() {
	errMsg.classList.add("showError");
	errMsg.innerText = "Kon opgegeven stad niet vinden. Probeer iets anders :)";
}