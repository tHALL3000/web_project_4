/** @format */

class Popup {
	constructor(popupSelector) {
		this._popupElement = document.querySelector(popupSelector);
	}
	_handleEscKey = (e) => {
		e.stopPropagation();
		if (e.key === "Escape") this.close();
	};

	_handleOutsideClick = (e) => {
		e.stopPropagation();
		if (e.target.classList.contains("overlay")) {
			this.close();
		}
	};

	open() {
		this._popupElement.classList.add("overlay_show");
		document.addEventListener("keydown", this._handleEscKey);
		this._popupElement.addEventListener("click", this._handleOutsideClick);
	}

	close() {
		this._popupElement.classList.remove("overlay_show");
		document.removeEventListener("keydown", this._handleEscKey);
		this._popupElement.removeEventListener("click", this._handleOutsideClick);
	}

	setEventListeners() {
		this._popupElement.addEventListener("click", (e) => {
			if (e.target.classList.contains("overlay_show") || e.target.classList.contains("modal__close-button")) {
				this.close();
			}
		});
	}
}
export default Popup;
