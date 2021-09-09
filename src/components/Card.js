/** @format */

class Card {
	constructor({ data, handleCardClick }, cardSelector) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data._likes;
		this._ownerId = data.owner._ownerId;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".photo-grid__card").cloneNode(true);

		return cardElement;
	}

	_setEventListeners() {
		const cardLike = this._card.querySelector(".photo-grid__heart");
		const cardDelete = this._card.querySelector(".photo-grid__delete");
		const cardImage = this._card.querySelector(".photo-grid__picture");

		cardLike.addEventListener("click", () => this._handleLikeIcon());
		cardDelete.addEventListener("click", () => this._handleDeleteIcon());
		cardImage.addEventListener("click", () =>
			this._handleCardClick({
				link: this._link,
				name: this._name,
			})
		);
	}

	_handleLikeIcon = () => {
		this._heart.classList.toggle("photo-grid__heart_active");
	};

	_handleDeleteIcon() {
		this._card.remove();
	}

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
