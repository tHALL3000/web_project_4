import { nameSelector, titleSelector } from "../index.js";
// import { userInfo } from "../components/UserInfo";

class Api {
	constructor(baseUrl, headers, cardId) {
		this.url = baseUrl;
		this.headers = headers;
		this.cardId = cardId;
	}

	_ifResReturnJson(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Error: ${res.status}`);
	}

	getInitialCards() {
		console.log(this.url);
		return fetch(`${this.url}/cards`, {
			headers: { authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f" },
		}).then((res) => this._ifResReturnJson(res));
	}

	getProfile() {
		return fetch(`${this.url}/11/users/me`, {
			method: "GET",
			headers: {
				authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
				"Content-Type": "application/json",
			},
		}).then((res) => this._ifResReturnJson(res));
	}

	setUserInfo(item) {
		return fetch(`${this.url}/11/users/me`, {
			method: "PATCH",
			headers: {
				authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				//check this
				name: item.name,
				title: item.title,
			}),
		}).then((res) => this._ifResReturnJson(res));
	}

	addCard(data) {
		return fetch(`${this.url}/cards`, {
			method: "POST",
			headers: {
				authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				link: data.link,
				name: data.name,
			}),
		}).then((res) => this._ifResReturnJson(res));
	}

	cardLikesTotal() {}

	deleteCard(cardId) {
		return fetch(`${this.url}/cards/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
				"Content-Type": "application/json",
			},
		});
	}

	updateProfilePicture() {
		const avatar = document.querySelector(".profile__picture-rounded");
		return fetch(`${this.url}/users/me/avatar`, {
			method: "PATCH",
			headers: {
				authorization: "f1a3823e-fb3e-4cac-8943-fd9e95cc434f",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(avatar),
			avatar: avatar,
		}).then((res) => this._ifResReturnJson(res));
	}
}

export default Api;
