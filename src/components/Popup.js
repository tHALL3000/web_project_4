/** @format */

//** @format */
class Popup {
	constructor(popupSelector) {
		// const popupSelector = document.querySelectorAll(".modal");
		this._popupElement = document.querySelector(popupSelector);
	}
	_handleEscKey = (e) => {
		// const activeModal = document.querySelector(".overlay_show");
		// if (e.key === "Escape" && activeModal) {
		//     toggleModal(activeModal); //close function
		e.preventDefault();
		if (e.key === "Escape") this.close();
	};

	_handleOutsideClick = (e) => {
		// if (e.target.classList.contains("overlay"))
		//     toggleModal(e.target); //close function
		this.close();
	};
	open() {
		this._popupElement.classList.add("overlay_show");
		if (this._popupElement.classList.contains("overlay_show")) {
			document.addEventListener("keydown", () => {
				this._handleEscKey();
			});
			this._popupElement.addEventListener("click", () => {
				this._handleOutsideClick();
			});
		}
	}

	close() {
		this._popupElement.classList.remove("overlay_show");
		document.removeEventListener("keydown", this._handleEscKey);
		modal.removeEventListener("click", this._handleOutsideClick);
	}

	setEventListeners() {
		const profileClose = document.querySelector(".modal__close-button");
		this._popupElement.classList.addEventListener("click", (e) => {
			if (e.target.classList.contains("overlay_show") || e.target.classList.contains(profileClose)) {
				this.close();
			}
		});
	}
}
export default Popup;
