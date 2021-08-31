/** @format */

import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(PopupSelector) {
		super(PopupSelector);
	}

	open({ link, name }) {
		this._popupElement.querySelector(".modal__caption").textContent = name;
		const image = this._popupElement.querySelector(".modal__image");
		image.src = link;
		image.alt = `Magnificent artist interpretation of ${name}`;
		super.open();
	}
}

export default PopupWithImage;
