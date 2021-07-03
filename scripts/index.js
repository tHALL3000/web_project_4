// Buttons
let editBtn = document.querySelector("#editBtn");
let saveBtn = document.querySelector("#saveBtn");
let closeBtn = document.querySelector(".modal__close-bar");

let overlay = document.querySelector(".overlay");
// Text
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__job");


// Inputs
let nameInput = document.forms.profile.elements.name;
let titleInput = document.forms.profile.elements.title;

// Modal
let toggleModal = () => {
    if (!overlay.classList.contains("overlay_show")) { 
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
}
    document.querySelector(".overlay").classList.toggle("overlay_show");
};


editBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);


const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
    toggleModal();
}
)
