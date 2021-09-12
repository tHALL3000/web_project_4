/** @format */

import Popup from "./Popup";

class PopupProfilePicture extends Popup {
	constructor(submitEditProfileForm, popupChangeProfile) {
		// super(popupSelector);
		this._popupProfileElement = document.querySelector(popupChangeProfile);
		this._submitForm = submitEditProfileForm;
		this._popupForm = this._popupProfileElement.querySelector(".form_profile-picture");
	}

	_getInputEditValues(data) {
		this._inputSource = this._popupForm.querySelectorAll(".modal__form-control_profile-picture-url");
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[input.link] = input.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupProfileElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._submitForm(this._getInputEditValues());
			this.close();
		});
	}

	close() {
		this._popupForm.reset();
		super.close();
	}
}
export default PopupProfilePicture;
