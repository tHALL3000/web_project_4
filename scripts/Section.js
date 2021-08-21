/** @format */

class Section {
	constructor({ items, renderer }, cardContainer) {
		this.renderer = renderer;
		this.items = items;
		this.cardContainer = document.querySelector(cardContainer);
	}

	rendererSection() {
		//render each element on page
		this.items.forEach((item) => {
			this.renderer(item);
		});
	}

	addItem(card) {
		//takes DOM element and adds it to the container
		this.cardContainer.prepend(card);
	}
}

export default Section;
