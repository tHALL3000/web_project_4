class Constants {
	renderLoading(isLoading, button) {
		button.textContent = isLoading ? "Saving..." : "Save";
	}
}
export default Constants;
