function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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
