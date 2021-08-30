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

	setUserInfo({ name, title }) {
		this._nameSelector.textContent = name;
		this._titleSelector.textContent = title;
	}
}
export default UserInfo;
