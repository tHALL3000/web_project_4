/** @format */

import profileText from "../index";

class Card {
	constructor(data, { handleCardClick, handleDeleteClick, handleLikeIcon, userId }, cardSelector) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._id = data.owner._id;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleLikeIcon = handleLikeIcon;
		this._cardId = data._id;
		this._userId = userId;
		this.deleteButton = document.querySelector(".photo-grid__delete");
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".photo-grid__card").cloneNode(true);
		return cardElement;
	}
	removeCard() {
		this._card.remove();
	}

	_setEventListeners() {
		const cardLike = this._card.querySelector(".photo-grid__heart");
		const cardDelete = this._card.querySelector(".photo-grid__delete");
		const cardImage = this._card.querySelector(".photo-grid__picture");

		cardLike.addEventListener("click", (e) => {
			this._handleLikeIcon();
		});

		cardDelete.addEventListener("click", () => this._handleDeleteClick(this._cardId));
		cardImage.addEventListener("click", () =>
			this._handleCardClick({
				link: this._link,
				name: this._name,
			})
		);
	}
	getCardId() {
		return this._cardId;
	}

	_updateLikesView(data) {
		if (this.isLiked(data)) {
			this._card.querySelector(".photo-grid__heart").classList.add("photo-grid__heart_active");
		}
		this._card.querySelector(".photo-grid__heart_counter").textContent = this._likes.length;
	}

	isLiked() {
		return Boolean(this._likes.find((like) => like._id === this._id));
	}

	setLikesInfo(data) {
		this._likes = data.likes;
		this._updateLikesView(data);
	}

	_prepareCard() {
		this._card.querySelector(".photo-grid__title").textContent = this._name;
		this._card.querySelector(".photo-grid__picture").src = this._link;
		this._card.alt = "Image" + this._name + "";
		this._heart = this._card.querySelector(".photo-grid__heart");
		const cardDelete = this._card.querySelector(".photo-grid__delete");
		if (this._currentUser !== this._id) {
			cardDelete.classList.add("photo-grid__delete_hidden");
		}
	}

	generateCard() {
		this._card = this._getTemplate();
		this._setEventListeners();
		this._updateLikesView();
		this._prepareCard();

		return this._card;
	}
}
export default Card;
