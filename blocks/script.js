const popupForm = document.querySelector(".popup");
const editButton = document.querySelector(".profile__info__edit-button");
const closeButton = document.querySelector(".popup__close-button");

const nameInput = document.querySelector(".popup__name-input");
const jobInput = document.querySelector(".popup__job-input");

const profileName = document.querySelector(".profile__info__name");
const profileJob = document.querySelector(".profile__info__job");

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
