class utils {
	constructor(button) {
		this._button = button;
	}
	renderLoading(isLoading) {
		this._button.textContent = isLoading ? "Saving..." : "Save";
	}
}
export default utils;
