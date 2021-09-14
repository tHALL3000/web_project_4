/** @format */

import "./index.css";
import config from "./utils/constants.js";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
// const popupChangeProfile = ".overlay_type_profile";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupProfilePicture from "./components/PopupProfilePicture.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import PopupDelete from "./components/PopupDelete.js";

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
const avatar = document.querySelector(".profile__picture-rounded");
const newProfile = document.querySelector(".photo-grid__heart_counter");
const cardFormElement = document.querySelector(".form_add");
const cardSelector = ".card-template";

const popupSelector = ".overlay_type_edit";
const popupAddSelector = ".overlay_type_add";
const popupChangeProfile = ".overlay_type_profile";

const addCardModal = new PopupWithForm((data) => {
	api.addCard(data).then((cards) => {
		cardList.addItem(cards);
		console.log(cards);
	});
}, popupAddSelector);
addCardModal.setEventListeners();

const popupImage = new PopupWithImage(".overlay_type_preview");
popupImage.setEventListeners();

const popupEditProfile = new PopupWithForm(submitEditProfileForm, popupSelector);
popupEditProfile.setEventListeners();

const popupProfilePicture = new PopupProfilePicture(submitEditProfilePicture, popupChangeProfile, popupSelector);
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
	nameSelector: "profile__name",
	titleSelector: "profile__job",
});
const handleCardClick = (data) => {
	popupImage.open(data);
};

const submitEditProfileForm = (data) => {
	api.setProfile(data).then((data) => userInfo.setUserInfo(data));
};

function createCard(data, cardSelector) {
	return new Card(data, cardSelector);
}
const baseUrl = "https://around.nomoreparties.co/v1/group-11";
const api = new Api(baseUrl, {
	headers: {
		authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f ",
		"Content-Type": "application/json",
	},
});

const submitEditProfilePicture = (data) => {
	api.updateProfilePicture(data.link).then((data) => {
		userInfo.setProfilePicture(avatar);
		popupProfilePicture.close();
	});
	// .catch((error) => {
	// 	console.log(error);
	// });
};
popupProfilePicture.setEventListeners();

// const popupProfilePicture = new PopupProfilePicture(
// 	{
// 		submitEditProfilePicture: (data) => {
// 			api.updateProfilePicture(data.link)
// 				.then((data) => {
// 					userInfo.setProfilePicture({ avatar: data.avatar });
// 					popupProfilePicture.close();
// 				})
// 				.catch((error) => {
// 					console.log(error);
// 				});
// 		},
// 	},
// 	popupChangeProfile
// );

// const popupEditProfile = new PopupWithForm(submitEditProfileForm, popupSelector);
// popupEditProfile.setEventListeners();

//() => {
//  	submitEditProfilePicture: (item) => {
//  		api.updateProfilePicture(item.link);
//  	},
//  });
//  popupProfileConfirm.setEventListeners();

const popupDeleteSelector = ".overlay_type_delete";
const popupDeleteConfirm = new PopupDelete(popupDeleteSelector, () => {
	api.deleteCard();
});
popupDeleteConfirm.setEventListeners();

const cardList = new Section(
	{
		renderer: (data) => {
			const card = createCard(
				{
					data,
					handleCardClick,
					handleLikeIcon: (card) => {
						if (card.isLiked()) {
							api.cardLikesAdd(card.getCardId()).then(() => {
								card.setLikesInfo(data);
							});
						} else {
							api.cardRemoveLike(card.getCardId()).then(() => {
								card.setLikesInfo(data);
							});
						}
					},

					handleDeleteClick: (cardId) => {
						popupDeleteConfirm.open();
						popupDeleteConfirm.setSubmitAction(() => {
							api.deleteCard(cardId).then(() => {
								//loading icon here
								card.removeCard();
								popupDeleteConfirm.close();
							});
						});
					},
				},

				cardSelector
			);
			photoGrid.prepend(card.generateCard());
		},
	},
	".photo-grid"
);

api.getAppInfo().then(([cardsArray, profileData]) => {
	userInfo.setUserInfo(profileData);

	cardList.renderSection(cardsArray);
});

// const popupSelector = ".overlay_type_edit";
// const popupAddSelector = ".overlay_type_add";

// const addCardModal = new PopupWithForm((data) => {
// 	api.addCard(data).then((cards) => {
// 		cardList.addItem(cards);
// 		console.log(cards);
// 	});
// }, popupAddSelector);
// addCardModal.setEventListeners();

// const popupImage = new PopupWithImage(".overlay_type_preview");
// popupImage.setEventListeners();

const editFormValidator = new FormValidator(config, editFormElement);
const cardFormValidator = new FormValidator(config, cardFormElement);
const profilePictureFormValidator = new FormValidator(config, editProfilePictureElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
profilePictureFormValidator.enableValidation();
