/** @format */

class Card {
	constructor({ data, handleCardClick, handleDeleteClick, handleLikeIcon }, cardSelector) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._ownerId = data.owner._id;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleLikeIcon = handleLikeIcon;
		this._cardId = data._id;
		this._currentUser = data._id;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".photo-grid__card").cloneNode(true);

		return cardElement;
	}
	removeCard() {
		this._card.remove();
	}
	// 	if(this._currentUser === this._ownerId) {
	// 	document.querySelector(".photo-grid__delete").style.visibility = "visible";
	// } else {
	// 	document.querySelector(".photo-grid__delete").style.visibility = "hidden";
	// };

	_setEventListeners() {
		const cardLike = this._card.querySelector(".photo-grid__heart");
		const cardDelete = this._card.querySelector(".photo-grid__delete");
		const cardImage = this._card.querySelector(".photo-grid__picture");

		cardLike.addEventListener("click", (e) => {
			this._handleLikeIcon();
		});

		cardDelete.addEventListener("click", () => this._handleDeleteClick(this._card));
		cardImage.addEventListener("click", () =>
			this._handleCardClick({
				link: this._link,
				name: this._name,
			})
		);
	}

	_handleLikeIcon = () => {
		this._heart.classList.toggle("photo-grid__heart_active");
		this._cardLikeCount(card);
	};

	_cardLikeCount = (card) => {
		this._card.querySelector("photo-grid__heart_counter").textContent = this._likes.length;
	};

	_prepareCard() {
		this._card.querySelector(".photo-grid__title").textContent = this._name;
		this._card.querySelector(".photo-grid__picture").src = this._link;
		this._card.alt = "Image" + this._name + "";
		this._heart = this._card.querySelector(".photo-grid__heart");
	}

	generateCard() {
		this._card = this._getTemplate();
		this._setEventListeners();
		this._prepareCard();

		return this._card;
	}
}
export default Card;
