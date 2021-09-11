/** @format */

import Popup from "./Popup";

class PopupDelete extends Popup {
	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleSubmitCallback();
		});
	}

	setSubmitAction(handleSubmitCallback) {
		this._handleSubmitCallback = handleSubmitCallback;
	}
}
export default PopupDelete;
