/** @format */

import "./index.css";
import { config, initialCards } from "./utils/constants";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo";

const editButton = document.querySelector("#editButton");
const photoModalButton = document.querySelector("#addPhoto");
const modalProfile = document.querySelector(".modal_edit_profile");
const editFormElement = modalProfile.querySelector(".form-profile");
const photoGrid = document.querySelector(".photo-grid");
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");
const nameInput = document.forms.profile.elements.nameProfile;
const titleInput = document.forms.profile.elements.title;

const cardFormElement = document.querySelector(".form_add");
const cardSelector = ".card-template";

editButton.addEventListener("click", () => {
	const profileText = userInfo.getUserInfo();
	profileName.value = profileText.name;
	profileTitle.value = profileText.title;
	popupEditProfile.open();
});

photoModalButton.addEventListener("click", () => {
	addCardModal.open();
});

const userInfo = new UserInfo({
	nameSelector: "profile__name",
	titleSelector: "profile__job",
});
const handleCardClick = (data) => {
	popupImage.open(data);
};

const submitEditProfileForm = (item) => {
	userInfo.setUserInfo(item);
};
function createCard(data, cardSelector) {
	return new Card(data, cardSelector);
}

const cardList = new Section(
	{
		renderer: (data) => {
			console.log("renderer", data);
			const card = createCard(
				{
					data,
					handleCardClick,
				},
				cardSelector
			);
			photoGrid.prepend(card.generateCard());
		},
	},
	".photo-grid"
);

cardList.renderSection(initialCards);

const popupSelector = ".overlay_type_edit";
const popupAddSelector = ".overlay_type_add";
const popupEditProfile = new PopupWithForm(submitEditProfileForm, popupSelector);
popupEditProfile.setEventListeners();
const addCardModal = new PopupWithForm((data) => {
	const card = createCard(
		{
			data,
			handleCardClick,
		},
		cardSelector
	);
	cardList.addItem(card.generateCard());
}, popupAddSelector);
addCardModal.setEventListeners();

const popupImage = new PopupWithImage(".overlay_type_preview");
popupImage.setEventListeners();

const editFormValidator = new FormValidator(config, editFormElement);
const cardFormValidator = new FormValidator(config, cardFormElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
