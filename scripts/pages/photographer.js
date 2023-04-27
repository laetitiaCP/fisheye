
async function displayPhotographerDetails(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    let locParams = (new URL(document.location)).searchParams;
    let locId = locParams.get('id');
    console.log(locId);
    let photographer = [];
    for(let i=0; i<photographers.length; i++) {
        if(photographers[i].id == locId) {
            photographer = photographers[i];
        }
    }
    
    const photographerModel =  photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
};



async function init() {
    // Récupère les médias du photographe
    const { photographers } = await getPhotographers();
    displayPhotographerDetails(photographers);
};

init();