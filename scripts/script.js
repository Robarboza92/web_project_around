let body = document.querySelector(".body")
let popup = body.querySelector(".popup")
let profilebutton = body.querySelector(".profile__info_edit")
let closebutton = body.querySelector(".popup__close-button")
let profileName = body.querySelector(".profile__info__name")
let profileJob = body.querySelector(".profile__info__profissão")
let nameInput = body.querySelector(".popup__name-input")
let jobInput = body.querySelector(".popup__job-input")
let formElement = body.querySelector(".popup.container")
let saveButton = body.querySelector(".popup__save-button")

function openpopup(){
popup.classList.add("popup_opened")
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;
}

profilebutton.addEventListener("click", openpopup);

function closepopup(){
popup.classList.remove("popup_opened")
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