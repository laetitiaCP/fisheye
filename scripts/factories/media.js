function mediaFactory(photographer, medias) {
    const nameWhithoutSpace = String(photographer.name).replace(/\s/g,''); // \tous les types d'espaces et /g option global: ne s'arrête pas au premier match
   
    let mapMedias = new Map();
    for(let i=0; i<medias.length; i++) {
        if(medias[i].photographerId === photographer.id) {
            if(medias[i].image) {
                //mapMedias.push(medias[i].image);
                 mapMedias.set(medias[i].title, medias[i].image);
            }
            if(medias[i].video) {
                mapMedias.set(medias[i].title, medias[i].video);
            }
        }
    }

    function getUserMedias() {
        const article = document.createElement('article');

        const folder = `assets/medias/${nameWhithoutSpace}/`;
        let title;

        for (let file of mapMedias) {
            if(String(file).includes('.jpg')) {
                let a = document.createElement('a');
                let title = document.createElement('p');
                title.textContent = file[0];
                let image = new imageDisplay(folder, file[1]);
                a.appendChild(image);
                a.appendChild(title);
                article.appendChild(a);
            }
            if(String(file).includes('.mp4')) {
                let a = document.createElement('a');
                let title = document.createElement('p');
                title.textContent = file[0];
                let video = new videoDisplay(folder, file[1]);
                a.appendChild(video);
                a.appendChild(title);
                article.appendChild(a);
            }
        }

        /*for(let i=0; i<mapMedias.size; i++) {
            if(String(mapMedias[i]).includes('.jpg')) {
                let image = new imageDisplay(folder, mapMedias[i]);
                article.appendChild(image);
            }
            if(String(mapMedias[i]).includes('.mp4')) {
                let video = new videoDisplay(folder, mapMedias[i]);
                article.appendChild(video);
            }
        }*/
        


        return (article);

    }
    return {getUserMedias};
}