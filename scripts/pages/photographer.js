
async function displayPhotographerDetails(photographers, media) {
    const photographersSection = document.querySelector(".photograph-header");
    const mediasSection = document.querySelector(".medias-section");
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
   
    const photographerModel =  photographerFactory(photographer);
    const mediaModel = mediaFactory(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userMedias = mediaModel.getUserMedias();
    photographersSection.appendChild(userCardDOM);
    mediasSection.appendChild(userMedias);
    headerModal.appendChild(nameTitle);
};

async function init() {
    // Récupère les médias du photographe
    const { photographers, media } = await getPhotographers();
    displayPhotographerDetails(photographers, media);
};

init();