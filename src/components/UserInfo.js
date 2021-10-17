/** @format */

class UserInfo {
	constructor({ nameSelector, titleSelector, profilePicture, id }) {
		this._nameSelector = document.querySelector(nameSelector);
		this._titleSelector = document.querySelector(titleSelector);
		this._profilePicture = document.querySelector(profilePicture);
		this._id = id;
	}
	getUserInfo() {
		return {
			name: this._nameSelector.textContent,
			title: this._titleSelector.textContent,
			avatar: this._profilePicture,
			id: this._id,
		};
	}

	setUserInfo({ name, about, avatar, _id }) {
		this._nameSelector.textContent = name;
		this._titleSelector.textContent = about;
		this._profilePicture.src = avatar;
		this._id = _id;
	}
}
export default UserInfo;
