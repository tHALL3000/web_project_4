import { nameSelector, titleSelector } from "../index.js";

class Api {
	constructor({ baseUrl, headers }) {
		this.url = baseUrl;
		this.headers = headers;
	}

	_checkResReturnJson(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Error: ${res.status}`);
	}

	getInitialCards() {
		return fetch(`${this.url}/cards`, {
			headers: this.headers,
		}).then((res) => this._checkResReturnJson(res));
	}
	getAppInfo() {
		return Promise.all([this.getInitialCards(), this.getProfile()]);
	}

	getProfile() {
		return fetch(`${this.url}/users/me`, {
			method: "GET",
			headers: this.headers,
		}).then((res) => this._checkResReturnJson(res));
	}

	setProfile(item) {
		return fetch(`${this.url}/users/me`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({
				name: item.name,
				about: item.title, //this needs to stay title//
			}),
		}).then((res) => this._checkResReturnJson(res));
	}

	addCard(data) {
		return fetch(`${this.url}/cards`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify({
				link: data.link,
				name: data.name,
			}),
		}).then((res) => this._checkResReturnJson(res));
	}

	cardLikesAdd(cardId) {
		return fetch(`${this.url}/cards/likes/${cardId}`, {
			method: "PUT",
			headers: this.headers,
		}).then((res) => this._checkResReturnJson(res));
	}

	cardRemoveLike(cardId) {
		return fetch(`${this.url}/cards/likes/${cardId}`, {
			method: "DELETE",
			headers: this.headers,
		}).then((res) => this._checkResReturnJson(res));
	}
	updateCardStatus(cardId, liked) {
		if (liked) {
			return this.cardRemoveLike(cardId);
		} else return this.cardLikesAdd(cardId);
	}

	deleteCard(cardId) {
		return fetch(`${this.url}/cards/${cardId}`, {
			method: "DELETE",
			headers: this.headers,
		});
	}
	//PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
	updateProfilePicture(avatar) {
		return fetch(`${this.url}/users/me/avatar`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify({ avatar: avatar }),
		}).then((res) => this._checkResReturnJson(res));
	}
}

export default Api;
