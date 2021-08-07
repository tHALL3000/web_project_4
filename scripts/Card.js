//add image section
// const pictureName = document.querySelector(".photo-grid__title");
// const pictureLink = document.querySelector(".photo-grid__picture");

// const addPhotoModal = document.querySelector(".overlay_type_add");

const modalPreviewWindow = document.querySelector(".overlay_type_preview");

const toggleModal = (modal) => {
    modal.classList.toggle("overlay_show");
    if (modal.classList.contains("overlay_show")) {
        document.addEventListener("keydown", handleEscKey);
        modal.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("keydown", handleEscKey);
        modal.removeEventListener("click", handleOutsideClick);
    }
};

const handleEscKey = (e) => {
    const activeModal = document.querySelector(".overlay_show");
    if (e.key === "Escape" && activeModal) {
        toggleModal(activeModal);
    }
};

const handleOutsideClick = (e) => {
    if (e.target.classList.contains("overlay")) {
        toggleModal(e.target);
    }
};

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector
        
        
    }
    _getTemplate() {
        
        return document.querySelector(this._cardSelector).content.querySelector(".photo-grid__card").cloneNode(true);
    }

    _handleLikeIcon() {
        cardLike.classList.toggle("photo-grid__heart_active");
    }

    _handleDeleteIcon() {
        this._card.remove();
    }

    _handlePreviewPicture() {
        imageElement.src = cardData.link;
        imageElement.alt = "Image" + cardData.name + "";
        imageCaption.textContent = cardData.name;
        toggleModal(modalPreviewWindow);
        
    }
    _setEventListeners() {
        const cardLike = this._card.querySelector(".photo-grid__heart");
        const cardDelete = this._card.querySelector(".photo-grid__delete");
        const cardImage = this._card.querySelector(".photo-grid__picture");
    

        cardLike.addEventListener("click", this._handleLikeIcon);
        cardDelete.addEventListener("click", this._handleDeleteIcon);
        cardImage.addEventListener("click", this._handlePreviewPicture);
    }

    generateCard() {
        this._card = this._getTemplate()
        this._setEventListeners();
        
        this._card.querySelector(".photo-grid__title").textContent = this._name;
        this._card.querySelector(".photo-grid__picture").src = this._link;
        cardImage.alt = "Image" + cardData.name + "";
        
        return this._card;
    }
};
    export default Card;