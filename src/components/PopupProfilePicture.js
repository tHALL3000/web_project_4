/** @format */

import Popup from "./Popup";

class PopupProfilePicture extends Popup {
	constructor(submitEditProfilePicture, popupSelector) {
		super(popupSelector);
		this._handleSubmitBtn = submitEditProfilePicture;
		this._popupForm = this._popupElement.querySelector(".form");
	}

	_getInputEditValues(item) {
		this._inputSource = this._popupForm.querySelectorAll("#avatar");
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[input.link] = input.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleSubmitBtn(this._getInputEditValues());
			this.close();
		});
	}

	close() {
		this._popupForm.reset();
		super.close();
	}
}

export default PopupProfilePicture;
