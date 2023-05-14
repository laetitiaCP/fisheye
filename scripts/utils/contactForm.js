const body = document.getElementById("body");
const main = document.getElementById("main");
const modal = document.getElementById("contact_modal");
const bouttonOpenModal = document.getElementById("open-modal-contact");
const bouttonCloseModal = document.getElementById("close-modale");


function displayModal() {
  main.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("no-scroll");
  modal.style.display = "block";
  bouttonCloseModal.focus();
}

function closeModal() {
  main.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("no-scroll");
  modal.style.display = "none";
  bouttonOpenModal.focus();

}

function submitData() {
  closeModal();
  let form = document.getElementById('form')
  let locFirst = document.getElementById('first').value;
  let locName = document.getElementById('name').value;
  let locEmail = document.getElementById('email').value;
  let locMessage = document.getElementById('message').value;
  let data = {"prenom":locFirst, "nom":locName, "email":locEmail, "message":locMessage};

  console.log(data);
  form.reset(); 
}

modal.addEventListener("keyup", function(e) {
  if(e.key === "Escape") {
    closeModal();
  }
})
