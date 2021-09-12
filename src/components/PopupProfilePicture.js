/** @format */

import Popup from "./Popup";

class PopupProfilePicture extends Popup {
	constructor(submitEditProfileForm, popupSelector) {
		super(popupSelector);
		this._submitForm = submitEditProfileForm;
		this._popupForm = this._popupElement.querySelector(".form_profile-picture");
	}

	_getInputEditValues(data) {
		this._inputSource = this._popupForm.querySelectorAll(".modal__form-control_profile-picture-url");
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[input.link] = input.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
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
