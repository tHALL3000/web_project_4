/** @format */

Popup;
import Popup from "./Popup";

class PopupWithForm extends Popup {
	constructor(submitForm, popupSelector) {
		super(popupSelector);
	}

	_getInputValues() {
		//input values from form fields
		//"name": newItemName.value,
		//"link": newItemLink.value
	}

	setEventListeners() {
		//add click event listenerclose icon
		//add submit to submit button
	}

	close() {
		super.close();
		form.reset();
		//reset
	}
}

export default PopupWithForm;
