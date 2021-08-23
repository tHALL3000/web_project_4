/** @format */

//** @format */

import Popup from "./Popup";

class PopupWithForm extends Popup {
	constructor(submitForm, popupSelector) {
		super(
			popupSelector
		);
		this._submitForm =
			submitForm;
		this._popupForm =
			this._popupElement.querySelector(
				".form-profile"
			);
	}

	_getInputValues() {
		profileName.textContent =
			nameInput.value;
		profileTitle.textContent =
			titleInput.value;
		//input values from form fields
		//"name": newItemName.value,
		//"link": newItemLink.value
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupSelector.addEventListener(
			"submit",
			(
				e
			) => {
				e.preventDefault();
				toggleModal(
					overlay
				);
				//add click event listenerclose icon
				//add submit to submit button
			}
		);
	}

	close() {
		this._popupForm.reset();
		super.close();
		//reset
	}
}
export default PopupWithForm;
