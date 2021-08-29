/** @format */

//** @format */
import "./index.css";
import FormValidator from "./utils/FormValidator";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./utils/Section.js";
import UserInfo from "./components/UserInfo";

const editButton = document.querySelector("#editButton");
const photoModalButton = document.querySelector("#addPhoto");
const modalProfile = document.querySelector(".modal_edit_profile");
const editFormElement = modalProfile.querySelector(".form-profile");

const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");

const nameInput = document.forms.profile.elements.name;
const titleInput = document.forms.profile.elements.title;

const overlay = document.querySelector(".overlay_type_edit");

const profileClose = document.querySelector(".modal__close-button");
const addPhotoClose = document.querySelector(".modal__close-button_add-photo");
const imgPreviewClose = document.querySelector(".modal__close-button_image");

const modal = document.querySelector(".modal");
const cardFormElement = document.querySelector(".form_add");

const handleOutsideClick = (e) => {
	if (e.target.classList.contains("overlay")) {
		toggleModal(e.target);
	}
};

const modalEditWindow = document.querySelector(".overlay_type_edit");
const modalAddWindow = document.querySelector(".overlay_type_add");
const modalPreviewWindow = document.querySelector(".overlay_type_preview");

editButton.addEventListener("click", () => {
	nameInput.value = profileName.textContent;
	titleInput.value = profileTitle.textContent;
	popupForm.open();
});

photoModalButton.addEventListener("click", () => {
	// toggleModal(modalAddWindow);
	document.getElementById("newPicture").reset();
	addCardModal.open();
});

// profileClose.addEventListener("click", () => {
// 	toggleModal(modalEditWindow);
// });

imgPreviewClose.addEventListener("click", () => {
	toggleModal(modalPreviewWindow);
});

// const formProfile = document.querySelector(".form-profile");
// formProfile.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	profileName.textContent = nameInput.value;
// 	profileTitle.textContent = titleInput.value;
// 	toggleModal(overlay);
// });

// addPhotoClose.addEventListener("click", () => {
// 	toggleModal(modalAddWindow);
// });

const addPictureForm = document.querySelector(".form_add");
const pictureTitleInput = document.forms.newPicture.elements.nameOfPlace;
const pictureLinkInput = document.forms.newPicture.elements.linkOfPlace;
const cardSelector = ".card-template";

addPictureForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const userCard = {
		name: pictureTitleInput.value,
		link: pictureLinkInput.value,
	};

	photoGrid.prepend(userCard.generateCard());
	(".card-template");
	addPictureForm.close();
	// toggleModal(modalAddWindow);
});

const initialCards = [
	{
		name: "Silicon Valley",
		link: "https://images.unsplash.com/photo-1621646912321-c97a233701d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80",
	},
	{
		name: "Miami Beach",
		link: "https://images.unsplash.com/photo-1622942817454-ed616e8d3a2d?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	},
	{
		name: "Land of Fire & Ice",
		link: "https://images.unsplash.com/photo-1620053553156-92e15d54f7ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eWVsbG93JTIwZmxhbWUlMjBibHVlJTIwc21va2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	},
	{
		name: "Neon Rain",
		link: "https://images.unsplash.com/photo-1621870616319-eeb7fdf31234?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	},
	{
		name: "Fashion Capital",
		link: "https://images.unsplash.com/photo-1618245613901-e52b7e0123c7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	},
	{
		name: "Cape Canaveral",
		link: "https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	},
];

const photoGrid = document.querySelector(".photo-grid");

// const userInfo = new userInfo({
// 	usernameSelector: profileConfig.profileTitle,
// 	userDescriptionSelector: profileConfig.profileDescription
// })
const handleCardClick = (data) => {
	imagePopup.open({
		name: data.name,
		link: data.link,
	});
};
console.log("Do you see me?");
const submitForm = (item) => {
	popupForm.open({
		nameInput: item.name,
		titleInput: item.title,
	});
};

const cardList = new Section({
	renderer: (data) => {
		console.log("renderer", data);
		const card = new Card(
			{
				data,
				handleCardClick,
			},
			cardSelector
		);
		photoGrid.prepend(card.generateCard());
		(".card-template");
	},
});
cardList.renderSection(initialCards);

const popupEditSelector = ".overlay_type_edit";
const popupAddSelector = ".overlay_type_add";

const popupForm = new PopupWithForm(submitForm, popupEditSelector);
popupForm.setEventListeners();

const addCardModal = new PopupWithForm(
	{
		submitForm: (data) => {
			const card = new Card(
				{
					data,
					handleCardClick,
				},
				cardSelector
			);

			cardList.addItem(card);
		},
	},
	popupAddSelector
);
addCardModal.setEventListeners();

// const imagePopup = new PopupWithImage(popupSelector);
// imagePopup.setEventListeners();

// const userInfo = new UserInfo(nameSelector, titleSelector);

const config = {
	inputSelector: ".modal__form-control-input",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
	inputErrorClass: "modal__form-control-input-error",
	errorClass: "popup-error",
};

const editFormValidator = new FormValidator(config, editFormElement);
const cardFormValidator = new FormValidator(config, cardFormElement);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
