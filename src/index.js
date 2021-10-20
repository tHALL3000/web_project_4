/** @format */

import "./index.css";
import config from "./utils/constants.js";
import utils from "./utils/utils.js";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import PopupDelete from "./components/PopupDelete.js";
import Popup from "./components/Popup";

const profileChange = document.querySelector("#userPicture");
const modalProfilePicture = document.querySelector(".modal_profile_picture");
const editProfilePictureElement = modalProfilePicture.querySelector(".form_profile-picture");
const editButton = document.querySelector("#editButton");
const photoModalButton = document.querySelector("#addPhoto");
const modalProfile = document.querySelector(".modal_edit_profile");
const editFormElement = modalProfile.querySelector(".form-profile");
const photoGrid = document.querySelector(".photo-grid");
const nameInput = document.forms.profile.elements.nameProfile;
const titleInput = document.forms.profile.elements.title;
const cardFormElement = document.querySelector(".form_add");
const cardSelector = ".card-template";
const popupSelector = ".overlay_type_edit";
const popupAddSelector = ".overlay_type_add";
const popupChangeProfile = ".overlay_type_profile";
const saveButton = document.querySelector(".button");

const utilities = new utils(saveButton);

const addCardModal = new PopupWithForm((data) => {
	utilities.renderLoading(true);
	api.addCard(data)
		.then((card) => {
			createCard(card, cardSelector);
			// Popup.close();
		})
		.catch((err) => console.log(`Error.....: ${err}`))
		.finally(() => {
			utilities.renderLoading(false, saveButton);
			// Popup.close();
		});
}, popupAddSelector);

addCardModal.setEventListeners();

const popupImage = new PopupWithImage(".overlay_type_preview");
popupImage.setEventListeners();

const submitEditProfileForm = (data) => {
	api.setProfile(data)
		.then((data) => userInfo.setUserInfo(data))
		.catch((err) => console.log(`Error.....: ${err}`));
};

const popupEditProfile = new PopupWithForm(submitEditProfileForm, popupSelector);
popupEditProfile.setEventListeners();

const submitEditProfilePicture = (data) => {
	api.updateProfilePicture(data.avatar)
		.then((data) => {
			userInfo.setUserInfo(data);
			popupProfilePicture.close();
		})
		.catch((err) => console.log(`Error.....: ${err}`));
};

const popupProfilePicture = new PopupWithForm(submitEditProfilePicture, popupChangeProfile);
popupProfilePicture.setEventListeners();

photoModalButton.addEventListener("click", () => {
	addCardModal.open();
});

editButton.addEventListener("click", () => {
	const profileText = userInfo.getUserInfo();
	nameInput.value = profileText.name;
	titleInput.value = profileText.title;
	popupEditProfile.open();
});

profileChange.addEventListener("click", () => {
	popupProfilePicture.open();
});

const userInfo = new UserInfo({
	nameSelector: ".profile__name",
	titleSelector: ".profile__job",
	profilePicture: ".profile__picture-rounded",
});
const handleCardClick = (data) => {
	popupImage.open(data);
};

function createCard(data, cardSelector) {
	const currentUser = userInfo.getUserInfo();

	const card = new Card(
		data,
		{
			userId: currentUser.id,
			handleCardClick,
			handleLikeIcon: () => {
				const cardId = data._id;
				api.updateCardStatus(cardId, !card.isLiked)
					.then((newData) => {
						card.setLikesInfo(newData);
					})
					.catch((err) => console.log(`Error.....: ${err}`));
			},

			handleDeleteClick: (cardId) => {
				popupDeleteConfirm.open();
				popupDeleteConfirm.setSubmitAction(() => {
					api.deleteCard(cardId)
						.then(() => {
							card.removeCard();
							popupDeleteConfirm.close();
						})
						.catch((err) => console.log(`Error.....: ${err}`));
				});
			},
		},
		cardSelector
	);
	photoGrid.prepend(card.generateCard());
}

const api = new Api({
	baseUrl: "https://around.nomoreparties.co/v1/group-11",
	headers: {
		authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
		"Content-Type": "application/json",
	},
});

const popupDeleteSelector = ".overlay_type_delete";
const popupDeleteConfirm = new PopupDelete(popupDeleteSelector, () => {
	api.deleteCard(cardId);
});
popupDeleteConfirm.setEventListeners();

const cardList = new Section(
	{
		renderer: (data) => {
			createCard(data, cardSelector);
		},
	},
	".photo-grid"
);

api.getAppInfo()
	.then(([cardsArray, profileData]) => {
		userInfo.setUserInfo(profileData);

		cardList.renderSection(cardsArray.reverse());
	})
	.catch((err) => console.log(`Error.....: ${err}`));

const editFormValidator = new FormValidator(config, editFormElement);
const cardFormValidator = new FormValidator(config, cardFormElement);
const profilePictureFormValidator = new FormValidator(config, editProfilePictureElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
profilePictureFormValidator.enableValidation();
