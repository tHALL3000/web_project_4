/** @format */

class UserInfo {
	constructor({ nameSelector, titleSelector }) {
		this._nameSelector = document.querySelector(`.${nameSelector}`);
		this._titleSelector = document.querySelector(`.${titleSelector}`);
	}
	getUserInfo() {
		return {
			name: this._nameSelector.textContent,
			title: this._titleSelector.textContent,
		};
	}

	setUserInfo({ name, about }) {
		this._nameSelector.textContent = name;
		this._titleSelector.textContent = about;
	}
}
export default UserInfo;
