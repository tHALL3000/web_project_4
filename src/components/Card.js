/** @format */

import profileText from "../index";

class Card {
	// 1 data (object)
	// 2 object
	// 3 cardSelector (string)
	constructor(data, { handleCardClick, handleDeleteClick, handleLikeIcon, userId }, cardSelector) {
		console.log("data", data);
		console.log("userId", userId);
		console.log("cardSelector", cardSelector);

		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._id = data.owner._id;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleLikeIcon = handleLikeIcon;
		this._cardId = data._id;
		// this._currentUser = profileText.id;
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

	_updateLikesView() {
		if (this.isLiked()) {
			console.log("is liked", this._card);
			this._card.querySelector(".photo-grid__heart").classList.add("photo-grid__heart_active");
		} else {
			console.log("else, not liked");
			this._card.querySelector(".photo-grid__heart").classList.remove("photo-grid__heart_active");
		}
		this._card.querySelector(".photo-grid__heart_counter").textContent = this._likes.length;
	}

	isLiked() {
		return Boolean(this._likes.find((user) => user._id === this._id));
	}

	_cardLikeCount = () => {
		//this._card.querySelector(".photo-grid__heart_counter").textContent = this._likes.length;
	};

	setLikesInfo(data) {
		this._likes = data.likes;
		this._updateLikesView();
	}

	_prepareCard() {
		this._card.querySelector(".photo-grid__title").textContent = this._name;
		this._card.querySelector(".photo-grid__picture").src = this._link;
		this._card.alt = "Image" + this._name + "";
		this._heart = this._card.querySelector(".photo-grid__heart");
		const cardDelete = this._card.querySelector(".photo-grid__delete");
		if (this._currentUser !== this._id) {
			console.log("trashcan", cardDelete);
			// cardDelete.classList.remove("photo-grid__delete");
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
