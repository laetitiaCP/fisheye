const medias = document.getElementById('myMedias');
const imageElement = document.createElement('img');
const prevLink = document.createElement('a');
const nextLink = document.createElement('a');
let counter = 0;
prevLink.className = "prev";
prevLink.textContent = "précédent";
nextLink.className = "next";
nextLink.textContent = "suivant";

medias.appendChild(prevLink);
medias.appendChild(nextLink);

function openMedia(parImage, parMapMedias, parFolder, parNameImg) {
    const srcImage = parImage.src;
    showImage(srcImage);

    let listMedias = [];
    listMedias = mapToListWithoutVideo(parMapMedias);
    let mediaIndex;
    for (let i = 0; i < listMedias.length ; i++) {
        if (listMedias[i] === parNameImg) {
             mediaIndex = i;
             break;
        }
    }
    
    nextLink.onclick = function() {
        plusMedias(1, mediaIndex, listMedias, parFolder);
    }

    prevLink.onclick = function() {
        plusMedias(-1, mediaIndex, listMedias, parFolder);
    }
}

function closeMedia() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
    counter = 0;
}

function plusMedias(n, parIndex, parListMedias, parFolder) {
    counter = (counter + n) % parListMedias.length;
    let locIdx = parIndex + counter;
    
    if (locIdx <= -1) {
        locIdx = parListMedias.length + locIdx;
    }
    if (locIdx >= parListMedias.length) {
        locIdx = locIdx - parListMedias.length ;
    }
    console.log(locIdx)
    let pathImage = parFolder + parListMedias[locIdx];
    showImage(pathImage);
}

function showImage(parImage) {
    imageElement.setAttribute('src', parImage);
    medias.appendChild(imageElement);
}

