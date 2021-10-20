class utils {
	constructor(button) {
		button = document.querySelector(".button");
	}
	renderLoading(isLoading, button) {
		button.textContent = isLoading ? "Saving..." : "Save";
	}
}
export default utils;
