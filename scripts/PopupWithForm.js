/** @format */

Popup;
import Popup from "./Popup";

class PopupWithForm extends Popup {
	constructor(submitForm, popupSelector) {
		super(popupSelector);
	}

    _getInputValues() {
       profileName.textContent = nameInput.value;
	    profileTitle.textContent = titleInput.value;
		//input values from form fields
		//"name": newItemName.value,
		//"link": newItemLink.value
	}

	setEventListeners() {
        super.setEventListeners();
            this._popup.addEventListener("submit", (e) => {
                e.preventDefault();
                //add click event listenerclose icon
                //add submit to submit button
            });

	close() {
		super.close();
		form.reset();
		//reset
	}
    };

export default PopupWithForm;
