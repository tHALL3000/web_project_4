// Buttons
const editBtn = document.querySelector("#editBtn");
const saveBtn = document.querySelector("#saveBtn");
const photoModalBtn = document.querySelector("#addPhoto");

//profile section
const modalProfile = document.querySelector(".modal__type-edit-profile");
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
const overlay = document.querySelector(".overlay");
const addPhotoModal = document.querySelector(".overlayPhoto");

//close button classes
const profileClose = document.querySelector(".modal__close-bar");
const addPhotoClose = document.querySelector(".modal__close-bar_add-photo");
const imgPreviewClose = document.querySelector(".modal__close-bar_image");

//enlarge picture section
const imageModal = document.querySelector(".overlay__type-preview");
const modalPicture = document.querySelector(".modal__figure");
const imageElement = document.querySelector(".modal__image");
const imageCaption = document.querySelector(".modal__caption");

const modal = document.querySelector(".modal");

// general Modal Popup function
const toggleModal = () => {
    if (!overlay.classList.contains("overlay_show")) {
        nameInput.value = profileName.textContent;
        titleInput.value = profileTitle.textContent;
    }
    document.querySelector(".overlay").classList.toggle("overlay_show");
};

const togglePreviewModal = () => {
    imageModal.classList.toggle("overlay_show");
};

//listeners
editBtn.addEventListener("click", () => {
    toggleModal(overlay);
});

profileClose.addEventListener("click", () => {
    toggleModal(overlay);
});

imgPreviewClose.addEventListener("click", () => {
    togglePreviewModal(overlay);
});

//submit function for profile section
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
    toggleModal();
});

//add photo modal
const toggleModalPhoto = () => {
    document.querySelector(".overlayPhoto").classList.toggle("overlayPhoto_show");
};
photoModalBtn.addEventListener("click", () => {
    toggleModalPhoto();
});

addPhotoClose.addEventListener("click", () => {
    toggleModalPhoto();
});

// add image Inputs
const addPictureform = document.querySelector(".form__type-add");
const pictureTitleInput = document.forms.newPicture.elements.nameOfPlace;
const pictureLinkInput = document.forms.newPicture.elements.linkOfPlace;

///submit button for user added picture///
addPictureform.addEventListener("submit", (e) => {
  e.preventDefault();
  const userSubmitCard = {
    name: pictureTitleInput.value,
    link: pictureLinkInput.value,
  };
  renderCard(createCard(userSubmitCard));
  toggleModalPhoto();
});

const renderCard = (card) => {
    photoGrid.prepend(card);
};

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
const createCard = (cardData) => {
    const cardTemplate = document.querySelector(".card-template").content.querySelector(".photo-grid__card");

    const cardElement = cardTemplate.cloneNode(true);

    const cardLike = cardElement.querySelector(".photo-grid__heart");

    const cardDelete = cardElement.querySelector(".photo-grid__delete");
    const cardImage = cardElement.querySelector(".photo-grid__picture");

    cardLike.addEventListener("click", () => {
        cardLike.classList.toggle("photo-grid__heart_active");
    });

    cardDelete.addEventListener("click", () => {
        cardElement.remove();
    });

    ////pop up for when the photo in a card is clicked/////
    cardImage.addEventListener("click", () => {
        imageElement.src = cardData.link;
        imageElement.alt = "Image" + cardData.name + "";
        imageCaption.textContent = cardData.name;
        togglePreviewModal();
    });

    cardElement.querySelector(".photo-grid__title").textContent = cardData.name;
    cardElement.querySelector(".photo-grid__picture").src = cardData.link;

    return cardElement;
};

////end/////
//bit that adds the card to the array///
initialCards.forEach((card) => {
    renderCard(createCard(card));
});