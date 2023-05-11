function mediaFactory(photographer, medias) {
    const nameWhithoutSpace = String(photographer.name).replace(/\s/g,''); // \tous les types d'espaces et /g option global: ne s'arrête pas au premier match
    let mapMedias = new Map();

    for(let i=0; i<medias.length; i++) {
        if(medias[i].photographerId === photographer.id) {
            if(medias[i].image) {
                 mapMedias.set(medias[i].title, medias[i].image);
            }
            if(medias[i].video) {
                mapMedias.set(medias[i].title, medias[i].video);
            }
        }
    }

    function getUserMedias() {
        const article = document.createElement("article");
        const folder = `assets/medias/${nameWhithoutSpace}/`;

        for (let file of mapMedias) {
            let locDiv = document.createElement('div');
            let title = document.createElement('p');
            title.textContent = file[0];
            
            if(String(file).includes(".jpg")) {
                let image = new imageDisplay(folder, file[1], file[0]);
                locDiv.appendChild(image);
                image.onclick = () => {
                    lightbox.style.display = "block";
                    openMedia(image, mapMedias, folder, file[1]);
               };
               image.addEventListener('keyup', function(e){
                    if (e.key === "Enter") {
                        lightbox.style.display = "block";
                        openMedia(image, mapMedias, folder, file[1]);
                    }
               } )
            }
            if(String(file).includes('.mp4')) {
                let video = new videoDisplay(folder, file[1], file[0]);
                locDiv.appendChild(video);
            }

            locDiv.appendChild(title);
            article.appendChild(locDiv);
        }     
        return (article);
    }
    return {getUserMedias};
}