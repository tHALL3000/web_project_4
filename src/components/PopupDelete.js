/** @format */

import Popup from "./Popup";

class PopupDelete extends Popup {
	constructor(popupDeleteSelector) {
		super(popupDeleteSelector);
		const deleteServerPopup = this._popupElement.querySelector(".modal_delete_confirm");
		this.ownerId = data.owner._ownerId;
		this.submitDelete = this._popupElement.querySelector(".submitDeleteButton");
	}

	open(popupDeleteSelector, ownerId) {
		this.card = e.target.Popup;
		this._ownerId = this.ownerId;
		super.open();
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._submitForm(deleteServerPopup);
			this.close();
		});
	}

	close() {
		this._popupForm.reset();
		super.close();
	}
}
export default PopupDelete;
