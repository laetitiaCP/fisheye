function mediaFactory(photographer, medias) {
    const nameWhithoutSpace = String(photographer.name).replace(/\s/g,''); // \tous les types d'espaces et /g option global: ne s'arrête pas au premier match
    const likesSection = document.querySelector(".likesAndPrice");
    let mapMedias = new Map();
    let mapLikes = new Map();
    let counter = 0;

    for(let i=0; i<medias.length; i++) {
        if(medias[i].photographerId === photographer.id) {
            if(medias[i].image) {
                 mapMedias.set(medias[i].title, medias[i].image);
                 mapLikes.set(medias[i].title, medias[i].likes);
            }
            if(medias[i].video) {
                mapMedias.set(medias[i].title, medias[i].video);
                mapLikes.set(medias[i].title, medias[i].likes);
            }
        }
    }

    function getUserMedias() {
        const article = document.createElement("article");
        const folder = `assets/medias/${nameWhithoutSpace}/`;
        
        for (let file of mapMedias) {
            let locDiv = document.createElement('div');
            let title = document.createElement('p');
            let likes = document.createElement("div");
            let span = document.createElement("span");
            likes.id = "likes";
            let heart = document.createElement('i');
            heart.setAttribute("aria-label", "bouton cliquable pour liker");
            heart.className = "fa-solid fa-heart fa-xl";
            heart.setAttribute("flag", "true");
            
            title.textContent = file[0];
            span.textContent = mapLikes.get(file[0]);
            span.setAttribute("aria-label", "nombre de likes: " + mapLikes.get(file[0]));
            counter = counter + mapLikes.get(file[0]);
            
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
            heart.onclick = () => {
                console.log(heart.getAttribute("flag"))
                if(heart.getAttribute("flag") === "true" ) {
                    span.textContent = mapLikes.get(file[0]) + 1;
                    console.log(span.textContent);
                    heart.setAttribute("flag", "false");
                    spanLikes.textContent = parseInt(spanLikes.textContent) + 1;
                }
            }
            
            likes.appendChild(title);
            likes.appendChild(span);
            likes.appendChild(heart);
            locDiv.appendChild(likes);
            article.appendChild(locDiv);    
        }

        let spanLikes = document.createElement("span");
        spanLikes.textContent = counter;
        let iHeart = document.createElement("i");
        iHeart.className = "fa-solid fa-heart fa-xl heart";
        likesSection.appendChild(spanLikes);
        likesSection.appendChild(iHeart);

        return (article);
    }
    return {getUserMedias};
}