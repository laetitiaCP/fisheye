
async function displayPhotographerDetails(photographers, media) {
    const photographersSection = document.querySelector(".photograph-header");
    const mediasSection = document.querySelector(".medias-section");
    const priceSection = document.querySelector(".likesAndPrice");
    const headerModal = document.querySelector(".header-modal");

    let locParams = (new URL(document.location)).searchParams;
    let locId = locParams.get('id');
    let photographer = [];
    for(let i=0; i<photographers.length; i++) {
        if(photographers[i].id == locId) {
            photographer = photographers[i];
        }
    }
    let nameTitle = document.createElement('h2');
    nameTitle.textContent = photographer.name;
    let partPrice = document.createElement('p');
    partPrice.textContent = photographer.price + "€ / jour";
    const photographerModel =  photographerFactory(photographer);
    const mediaModel = mediaFactory(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userMedias = mediaModel.getUserMedias();
    photographersSection.appendChild(userCardDOM);
    mediasSection.appendChild(userMedias);
    priceSection.appendChild(partPrice);
    headerModal.appendChild(nameTitle);
};



async function init() {
    // Récupère les médias du photographe
    const { photographers, media } = await getPhotographers();
    displayPhotographerDetails(photographers, media);
};

init();