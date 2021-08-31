/** @format */

class Section {
	constructor({ renderer }, cardContainer) {
		this.renderer = renderer;
		this.cardContainer = document.querySelector(cardContainer);
	}

	renderSection(items) {
		items.forEach((item) => {
			this.renderer(item);
		});
	}

	addItem(card) {
		this.cardContainer.prepend(card);
	}
}

export default Section;
