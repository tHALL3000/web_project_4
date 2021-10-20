/** @format */

import Popup from "./Popup";

class PopupWithForm extends Popup {
	constructor(submitEditProfileForm, popupSelector) {
		super(popupSelector);
		this._submitForm = submitEditProfileForm;
		this._popupForm = this._popupElement.querySelector(".form");
		this._savebutton = this._popupElement.querySelector(".button");
	}

	_getInputEditValues(data) {
		this._inputSource = this._popupForm.querySelectorAll(".modal__form-control-input");
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[input.name] = input.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._savebutton.innerText = "Saving...";
			this._submitForm(this._getInputEditValues());
			this.close();
		});
	}

	open() {
		super.open();
		this._savebutton.innerText = "Save";
	}

	close() {
		this._popupForm.reset();
		super.close();
	}
}
export default PopupWithForm;
