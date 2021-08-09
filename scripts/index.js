import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
// Buttons
const editBtn = document.querySelector("#editBtn");
const photoModalBtn = document.querySelector("#addPhoto");

//profile section
const modalProfile = document.querySelector(".modal-type-edit-profile");
const editFormElement = modalProfile.querySelector(".formProfile");
// Text in profile
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");
// Profile Inputs
const nameInput = document.forms.profile.elements.name;
const titleInput = document.forms.profile.elements.title;

//add image section
const pictureName = document.querySelector(".photo-grid__title");
const pictureLink = document.querySelector(".photo-grid__picture");

//overlays
const overlay = document.querySelector(".overlay_type_edit");
const addPhotoModal = document.querySelector(".overlay_type_add");

//close button classes
const profileClose = document.querySelector(".modal__close-bar");
const addPhotoClose = document.querySelector(".modal__close-bar_add-photo");
const imgPreviewClose = document.querySelector(".modal__close-bar_image");
const overlayWindow = document.querySelector(".page");

//enlarge picture section
const imageModal = document.querySelector(".overlay_type_preview");
const modalPicture = document.querySelector(".modal__figure");
const imageElement = document.querySelector(".modal__image");
const imageCaption = document.querySelector(".modal__caption");

const modal = document.querySelector(".modal");
const cardFormElement = document.querySelector(".form-type-add");

// general Modal Popup function
const formValues = () => {
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
};
const toggleModal = (modal) => {
    // const modal = document.querySelector(".modal");
    // console.log(modal);
    
    modal.classList.toggle("overlay_show");
    if (modal.classList.contains("overlay_show")) {
        document.addEventListener("keydown", handleEscKey);
        modal.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("keydown", handleEscKey);
        modal.removeEventListener("click", handleOutsideClick);
    }
};

const handleOutsideClick = (e) => {
    if (e.target.classList.contains("overlay")) {
        toggleModal(e.target);
    }
};
const handleEscKey = (e) => {
    const activeModal = document.querySelector(".overlay_show");
    if (e.key === "Escape" && activeModal) {
        toggleModal(activeModal);
    }
};

//listeners/////////////
const modalEditWindow = document.querySelector(".overlay_type_edit");
const modalAddWindow = document.querySelector(".overlay_type_add");
const modalPreviewWindow = document.querySelector(".overlay_type_preview");

editBtn.addEventListener("click", () => {
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
    toggleModal(modalEditWindow);
});

photoModalBtn.addEventListener("click", () => {
    toggleModal(modalAddWindow);
    // defaultButtonState(button);
    document.getElementById("newPicture").reset();

});

profileClose.addEventListener("click", () => {
    toggleModal(modalEditWindow);
});

imgPreviewClose.addEventListener("click", () => {
    toggleModal(modalPreviewWindow);
});

///////////////////

//submit function for profile section

const formProfile = document.querySelector(".formProfile");
formProfile.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
    toggleModal(overlay);
});

addPhotoClose.addEventListener("click", () => {
    toggleModal(modalAddWindow);
});

// add image Inputs
const addPictureform = document.querySelector(".form-type-add");
const pictureTitleInput = document.forms.newPicture.elements.nameOfPlace;
const pictureLinkInput = document.forms.newPicture.elements.linkOfPlace;
const cardSelector = document.querySelector(".card-template");
///submit button for user added picture///
const renderCard = (data) => {
       const  card = new Card(data, cardSelector);
        photoGrid.prepend(card.generateCard());
    };

addPictureform.addEventListener("submit", (e) => {
    e.preventDefault();
    const userSubmitCard = {
        name: pictureTitleInput.value,
        link: pictureLinkInput.value,
    };
    
    renderCard(userSubmitCard);
    toggleModal(modalAddWindow);
});

//Array for photo cards- in reverse order, which is why we need the prepend not append
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

//new card
const photoGrid = document.querySelector(".photo-grid");

////begin/////


////end/////
//bit that adds the card to the array///
initialCards.forEach((card) => {
    renderCard(card);
    });


    const config = {
    
        inputSelector: ".modal__form-control-input",
        submitButtonSelector: ".button",
        inactiveButtonClass: "button-disabled",
        inputErrorClass: "modal__form-control-input-error",
        errorClass: "popup-error",
    };

const editFormValidator = new FormValidator(config, editFormElement);
const cardFormValidator = new FormValidator(config, cardFormElement);

    editFormValidator.enableValidation();
    cardFormValidator.enableValidation();