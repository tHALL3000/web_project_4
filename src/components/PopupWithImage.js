/** @format */

//** @format */

import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(PopupSelector) {
		super(PopupSelector);
	}

	open({ link, name }) {
		//get name and link from model form
		this._popupElement.querySelector(".modal__caption").textcontent = name;
		const image = this._popupElement.querySelector(".modal__image");
		image.src = link;
		image.alt = `Magnificent artist interpretation of ${name}`;
		//call open function from parent class with super
		super.open();
	}
}

export default PopupWithImage;
