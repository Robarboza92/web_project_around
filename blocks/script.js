const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__info-editbutton");
const closeButton = document.querySelector(".popup__close-button");

const nameInput = document.querySelector(".popup__name-input");
const jobInput = document.querySelector(".popup__job-input");

const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-job");

const saveButton = document.querySelector(".popup__save-button");

function changeDisplaytoFlex() {
  popupForm.classList.add("popup_change_display");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function changeDisplaytoNone() {
  popupForm.classList.remove("popup_change_display");
}

editButton.addEventListener("click", changeDisplaytoFlex);
closeButton.addEventListener("click", changeDisplaytoNone);

function SaveProfileFormSubmit(evento) {
  evento.preventDefault();
  if (nameInput.value == "" && jobInput.value != "") {
    alert("Preencha seu nome!");
    return;
  }
  if (jobInput.value == "") {
    alert("Preencha sua profissão!");
    return;
  }
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  changeDisplaytoNone();
}

saveButton.addEventListener("click", SaveProfileFormSubmit);

const cardpopupForm = document.querySelector(".card__popup");
const addButton = document.querySelector(".card__addbutton");
const cardcloseButton = document.querySelector(".card__popup__close-button");
const titleInput = document.querySelector(".popup__title-input");
const linkInput = document.querySelector(".popup__link-input");

function cardchangeDisplaytoFlex() {
  cardpopupForm.classList.add("card__popup_change_display");
  titleInput.value = profiletitle.textContent;
  linkInput.value = profilelink.textContent;
}
function cardchangeDisplaytoNone() {
  cardpopupForm.classList.remove("card__popup_change_display");
}

addButton.addEventListener("click", cardchangeDisplaytoFlex);
cardcloseButton.addEventListener("click", cardchangeDisplaytoNone);

const cards = document.querySelector(".cards");
const initialCards = [
  {
    name: "Museo de la Memoria y los Derechos Humanos MMDH",
    link: "./images/Museo_de_la_Memoria_y_los_Derechos_Humanos_MMDH.jpg",
  },
  {
    name: "Embalse el Yeso - Chile",
    link: "./images/Embalse_el_Yeso_Chile.jpg",
  },
  {
    name: "Vina del mar - Chile",
    link: "./images/Vina_del_mar_Chile.jpg",
  },
  {
    name: "Parque de Farellones - Chile",
    link: "./images/Parque_de_Farellones_Chile.jpg",
  },
  {
    name: "Museu Nacional de História Natural do Chile",
    link: "./images/Museu_Nacional_de_História_Natural_do_Chile.jpg",
  },
  {
    name: "Valle Nevado Hotel",
    link: "./images/Valle_Nevado_Hotel_Chile.jpg",
  },
];
const cardItem = document
  .querySelector("#template")
  .content.querySelector(".table__item");

function addCard(card) {
  const cardItem = document
    .querySelector("#template")
    .content.querySelector(".table__item")
    .cloneNode(true);
  cardItem.querySelector("#title").textContent = card.name;
  cardItem.querySelector(".card__image").setAttribute("src", card.link);
  cardItem.querySelector(".card__image").setAttribute("alt", card.name);
  return cardItem;
}

for (const card of initialCards) {
  cards.prepend(addCard(card));
}
//   cards.append(card);
// }

// for (const novoCard of cards) {
//   addCard(novoCard);
// }
