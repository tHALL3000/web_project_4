import { nameSelector, titleSelector } from "../index.js";

class Api {
	constructor(baseUrl, headers) {
		this.url = baseUrl;
		this.headers = headers;
	}

	_ifResReturnJson(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Error: ${res.status}`);
	}

	getInitialCards() {
		console.log("this url", this.url);
		return fetch(`${this.url}/cards`, {
			headers: this.url.headers,
		}).then((res) => this._ifResReturnJson(res));
	}
	getAppInfo() {
		return Promise.all([this.getInitialCards(), this.getProfile()]);
	}

	getProfile() {
		return fetch(`${this.url}/users/me`, {
			method: "GET",
			headers: this.url.headers,
		}).then((res) => this._ifResReturnJson(res));
	}

	setProfile(item) {
		return fetch(`${this.url}/users/me`, {
			method: "PATCH",
			headers: this.url.headers,
			body: JSON.stringify({
				name: item.name,
				about: item.title, //this needs to stay title//
			}),
		}).then((res) => this._ifResReturnJson(res));
	}

	addCard(data) {
		return fetch(`${this.url}/cards`, {
			method: "POST",
			headers: this.url.headers,
			body: JSON.stringify({
				link: data.link,
				name: data.name,
			}),
		}).then((res) => this._ifResReturnJson(res));
	}

	cardLikesAdd(cardId) {
		return fetch(`${this.url}/cards/likes/${cardId}`, {
			method: "PUT",
			headers: this.url.headers,
		}).then((res) => this._ifResReturnJson(res));
	}

	cardRemoveLike(cardId) {
		return fetch(`${this.url}/cards/likes/${cardId}`, {
			method: "DELETE",
			headers: this.url.headers,
		}).then((res) => this._ifResReturnJson(res));
	}
	updateCardStatus(cardId) {
		if (liked) {
			return this.cardRemoveLike(cardId);
		} else return this.cardLikesAdd(cardId);
	}

	deleteCard(cardId) {
		return fetch(`${this.url}/cards/${cardId}`, {
			method: "DELETE",
			headers: this.url.headers,
		});
	}
	//PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
	updateProfilePicture(avatar) {
		return fetch(`${this.url}/users/me/avatar`, {
			method: "PATCH",
			headers: this.url.headers,
			body: JSON.stringify({ avatar: avatar }),
		}).then((res) => this._ifResReturnJson(res));
	}
}

export default Api;
