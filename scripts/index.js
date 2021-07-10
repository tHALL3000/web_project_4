// Buttons
const editBtn = document.querySelector("#editBtn");
const saveBtn = document.querySelector("#saveBtn");
const photoModal = document.querySelector("#addPhoto");
const imageModal = document.querySelector(".modal__type_add-card");

//profile section
const modalProfile = document.querySelector(".modal__type_edit-profile");
// Text in profile
const profileName = document.querySelector(".profile__name");
const profileTitle = document.querySelector(".profile__job");
// Profile Inputs

const nameInput = document.forms.profile.elements.name;
const titleInput = document.forms.profile.elements.title;

//overlays
const overlay = document.querySelector(".overlay");
const imgPreviewModal = document.querySelector(".overlay__type_preview");
const addPhotoModal = document.querySelector(".overlay__type_add-card")

//close button classes
const profileClose = document.querySelector(".modal__close-bar");
const addPhotoClose = document.querySelector(".modal__close-bar_add-photo");
const imgPreviewClose = document.querySelector(".modal__close-bar_image");


//enlarge picture section
const modalPicture = document.querySelector(".modal__figure");
const imageElement = document.querySelector(".modal__image");
const imageCaption = document.querySelector(".modal__caption");




const modal = document.querySelector(".modal");

// general Modal Popup function
let toggleModal = () => { 
    if (!overlay.classList.contains("overlay_show")) {  
    nameInput.value = profileName.textContent; 
    titleInput.value = profileTitle.textContent; 
} 
    document.querySelector(".overlay").classList.toggle("overlay_show"); 
}; 


// Modalfunction-for photo card
//const closeModal = (modal) => {
//  modal.classlist.toggle("overlay_show");
//}

//listeners
editBtn.addEventListener("click", () => {
  toggleModal(overlay)
});




photoModal.addEventListener("click",  () => {
  toggleModal(addPhotoModal)
});


//submit function for profile section


const form = document.querySelector(".form"); 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;
  toggleModal();
});

//Array for photo cards- in reverse order, which is why we need the prepend not append
const initialCards = [
  {
  name: "Silicon Valley",
  link: "https://images.unsplash.com/photo-1621646912321-c97a233701d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80"
},
{
  name: "Miami Beach",
  link: "https://images.unsplash.com/photo-1622942817454-ed616e8d3a2d?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
},
{
  name: "Land of Fire and Ice",
  link: "https://images.unsplash.com/photo-1620053553156-92e15d54f7ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eWVsbG93JTIwZmxhbWUlMjBibHVlJTIwc21va2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
},
{
  name: "Neon Rain",
  link: "https://images.unsplash.com/photo-1621870616319-eeb7fdf31234?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
},
{
  name: "Fashion Capital",
  link: "https://images.unsplash.com/photo-1618245613901-e52b7e0123c7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
},
{
  name: "Cape Canaveral",
  link: "https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
}
];

//new card stuffs
const photoGrid = document.querySelector(".photo-grid")

const createCard = (card) => {
  const cardTemplate = document.querySelector(".card-template").content.querySelector(".photo-grid__card");
  const cardElement = cardTemplate.cloneNode(true);
 

  //  const cardLike = cardElement.querySelector(".photo-grid__heart");
  //  const cardLikeActive = cardElement.querySelector(".photo-grid__heart_active");
  //  const cardDelete = cardElement.querySelector(".photo-grid__delete");

  cardElement.querySelector(".photo-grid__title").textContent = card.name;
  cardElement.querySelector(".photo-grid__picture").src = card.link;

  return cardElement;
}
initialCards.forEach(data => {

  const card = createCard(data);
  photoGrid.prepend(card)
});
 /* const toggleClass = function (cardLike) {
  //   if (cardLike.classList.contains(cardLike)) {
  //     cardLike.classList.toggle(cardLikeActive)
  //   }
  //     else {
  //       cardLike.classList.toggle(cardLike)
  //     }
  // }
  // cardLike.addEventListener("click", () => {
  //   toggleClass(cardLike)
  // });
  
  // });


  //cardDelete.addEventListener("click", () => { }
  //);
  // imageModal.addEventListener("click", () => {
  //   imageElement.src = data.link;
  //   imageElement.alt = "Image" + data.name + "";
  //   imageCaption.textContent = data.name;
  //   toggleModal(imgPreviewModal)
  // }
  // );

  // photoGrid.prepend(cardElement);

  //like btn idea
  // document.getElementsByClassName("cover-wrap")[0].addEventListener("click", function(){
  //   if(this.classList.contains("active")) {
  //     this.classList.remove("active");
  //   }
  //   else this.classList.add("active");
// )}
*/
