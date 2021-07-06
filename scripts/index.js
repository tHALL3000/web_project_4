// Buttons
let editBtn = document.querySelector("#editBtn");
let saveBtn = document.querySelector("#saveBtn");
let closeBtn = document.querySelector(".modal__close-bar");
const addPhotoModalBtn = document.querySelector("#addPhoto");


let overlay = document.querySelector(".overlay");

const imageModal = document.querySelector(".modal__type_add-card");

// Text
let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__job");


// Profile Inputs
let nameInput = document.forms.profile.elements.name;
let titleInput = document.forms.profile.elements.title;

// Modalfunction
let toggleModal = () => {
    if (!overlay.classList.contains("overlay_show")) { 
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
}
    document.querySelector(".overlay").classList.toggle("overlay_show");
};

// Modalfunction-for any modal

let toggleModalPhoto = () => {
    document.querySelector(".overlayPhoto").classList.toggle("overlayPhoto_show");
};


//listeners
editBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
addPhotoModalBtn.addEventListener("click", toggleModalPhoto);

//submit function
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileTitle.textContent = titleInput.value;
    toggleModal();
}
)

//Array for photo cards- in reverse order, which is why we need the prepend not append

const initialCards = [
{
    name: "Cape Canaveral",
    link: "https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Fashion Capital",
    link: "https://images.unsplash.com/photo-1618245613901-e52b7e0123c7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Miami Beach",
    link: "https://images.unsplash.com/photo-1622942817454-ed616e8d3a2d?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "JS template!",
    link: "https://images.unsplash.com/photo-1621870616319-eeb7fdf31234?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Look who made a ",
    link: "https://images.unsplash.com/photo-1620053553156-92e15d54f7ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eWVsbG93JTIwZmxhbWUlMjBibHVlJTIwc21va2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Silicon Valley",
    link: "https://images.unsplash.com/photo-1621646912321-c97a233701d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80"
}
];

//new card stuffs
const cardTemplate = document.querySelector(".card-template").content.querySelector(".photo-grid__card");
const photoGrid = document.querySelector(".photo-grid")

initialCards.forEach(data => {
    //make card
  const cardElement = cardTemplate.cloneNode(true);
  document.body.appendChild(cardElement); //unsure about this bit, w3 said this for div clone
  const cardImage = cardElement.querySelector(".photo-grid__picture");
  const cardTitle = cardElement.querySelector(".photo-grid__title");
  const cardLike = cardElement.querySelector(".photo-grid__heart");
  const cardDelete = cardElement.querySelector(".photo-grid__delete");
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  photoGrid.prepend(cardElement);
})






  cardLike.addEventListener("click", () => {}
  )
  cardDelete.addEventListener("click", () => {}
  )
  cardImage.addEventListener("click", () => {}
  )