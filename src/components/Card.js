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
			this._handleLikeIcon(e.target.classList.contains("photo-grid__heart")).then((card) => {
				e.target.classList.add("photo-grid__heart_active");
				this._updateLikesView(card);
			});
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
		this._card.querySelector(".photo-grid__heart_counter").textContent = this._likes.length;
		if (this.isLiked()) {
			this._card.querySelector(".photo-grid__heart").classList.add("photo-grid__heart_active");
		} else {
			this._card.querySelector(".photo-grid__heart").classList.remove("photo-grid__heart_active");
		}
	}

	isLiked() {
		if (this._likes.find((card) => card._ownerId === this._ownerId)) {
			return true;
		}
		return false;
	}

	_cardLikeCount = () => {
		this._card.querySelector("photo-grid__heart_counter").textContent = this._likes.length;
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
