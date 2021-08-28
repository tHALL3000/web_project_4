/** @format */

//** @format */

import Popup from "./Popup";

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");
const nameInput = document.forms.profile.elements.name;
const titleInput = document.forms.profile.elements.title;

class PopupWithForm extends Popup {
	constructor(submitForm, popupEditSelector) {
		super(popupEditSelector);
		this._submitForm = submitForm;
		this._popupForm = document.querySelector(".form-profile");
	}

	submitForm = (data) => {
		console.log("Do you see me?");
		popupForm.open({
			nameInput: data.name,
			titleInput: data.title,
		});
	};
	_getInputEditValues(data) {
		this._inputSource = document.querySelectorAll(".modal__form-control-input");
		// profileName.textContent = nameInput.value;
		// profileTitle.textContent = titleInput.value;
		this._inputValues = {};
		this._inputSource.forEach((input) => (this._inputSource[nameInput.name] = nameInput.value));
		return this._inputValues;

		// cardList.renderSection(initialCards);

		// if e.target === "saveButton"() => {
		// 	addCardModal()
		// }

		// 	this._popupElement.addEventListener("click", (e) => {
		// 		if (e.target.classList === "saveButton") {
		// 			addCardModal(data);
		// 		} else {
		// 			cardList(data)
		// 			}));
		// 	this.close();
		// });
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupElement.addEventListener("submit", (e) => {
			e.preventDefault();
			this._submitForm(this._getInputEditValues);
			this.close();
			// popupForm.close();
		});
	}
}
export default PopupWithForm;
