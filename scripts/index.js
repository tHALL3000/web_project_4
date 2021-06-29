// Buttons
let editBtn = document.querySelector("#editBtn");
let saveBtn = document.querySelector("#saveBtn");
let closeBtn = document.querySelector(".modal__close-bar");

// Modal
let toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal--show");
    document.querySelector(".overlay").classList.toggle("overlay__show");
};
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

// Text
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__job");

// Inputs
let nameInput = document.forms.profile.elements.name;
let titleInput = document.forms.profile.elements.title;

function closeModal() {
    overlay.classList.remove("overlay__show");
    modal.classList.remove("modal--show");
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
}

editBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
saveBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
