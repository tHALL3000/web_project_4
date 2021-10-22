export function renderLoading(isLoading, button) {
	const baseElement = document.querySelector(".overlay_show");
	baseElement.querySelector(".button").textContent = isLoading ? "Saving..." : "Save";
}
