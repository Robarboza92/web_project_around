let body = document.querySelector(".body");
let popup = body.querySelector(".popup");
let profilebutton = body.querySelector(".profile__info-edit");
let closebutton = body.querySelector(".popup__close-button");
let profileName = body.querySelector(".profile__name");
let profileJob = body.querySelector(".profile__job");
let nameInput = body.querySelector(".popup__name-input");
let jobInput = body.querySelector(".popup__job-input");
let formElement = body.querySelector(".popup__container");
let saveButton = body.querySelector(".popup__save-button");
let popupoverlay = body.querySelector(".popup__overlay");

function openpopup() {
  popup.classList.add("popup__opened");
  popupoverlay.classList.add("popup__overlay-opened")
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

profilebutton.addEventListener("click", openpopup);

function closepopup() {
  popup.classList.remove("popup__opened");
}

closebutton.addEventListener("click", closepopup);

function saveprofileformsubmit(evento) {
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
  closepopup();
}

saveButton.addEventListener("click", saveprofileformsubmit);
