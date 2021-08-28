/** @format */

//** @format */

import Popup from "./Popup";

class PopupWithForm extends Popup {
	constructor(submitForm, popupSelector) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._popupForm = this._popupElement.querySelector(".form-profile");
	}

	_getInputValues() {
		this._inputSource = this._popupForm.querySelectorAll(".modal__form-control-input");
		profileName.textContent = nameInput.value;
		profileTitle.textContent = titleInput.value;
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputValues[nameInput.name] = nameInput.value));
		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._submitForm(this._getInputValues());
			// toggleModal(overlay);
		});
	}
}
export default PopupWithForm;
