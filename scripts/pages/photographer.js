
async function displayPhotographerDetails(photographers, media) {
    const photographersSection = document.querySelector(".photograph-header");
    const mediasSection = document.querySelector(".medias-section");

    let locParams = (new URL(document.location)).searchParams;
    let locId = locParams.get('id');
    let photographer = [];
    for(let i=0; i<photographers.length; i++) {
        if(photographers[i].id == locId) {
            photographer = photographers[i];
        }
    }
    
    const photographerModel =  photographerFactory(photographer);
    const mediaModel = mediaFactory(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    const userMedias = mediaModel.getUserMedias();
    photographersSection.appendChild(userCardDOM);
    mediasSection.appendChild(userMedias);
};



async function init() {
    // Récupère les médias du photographe
    const { photographers, media } = await getPhotographers();
    displayPhotographerDetails(photographers, media);
};

init();