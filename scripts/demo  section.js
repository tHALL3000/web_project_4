/** @format */

class Section {
	constructor({ items, renderer }, cardContainer) {
		this.renderer = renderer;
		this.items = items;
		this.cardContainer = document.querySelector(cardContainer);
	}

	renderItems() {
		//render each element on page
		this.items.forEach((item) => {
			this._renderer(item);
		});
	}

	addItem(card) {
		//takes DOM element and adds it to the container
		this._cardContainer.prepend(card);
	}
}

export default Section;

// //Create Initial Card Section
// initialCards.forEach((data)=>{renderCard(data, cardContainer)});
