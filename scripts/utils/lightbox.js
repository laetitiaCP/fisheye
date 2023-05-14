const lightbox = document.getElementById("lightbox");
const closeImg =  document.getElementById("close-img");
const medias = document.getElementById('myMedias');
const imageElement = document.createElement('img');
const prevLink = document.createElement('a');
const nextLink = document.createElement('a');
const chevronLeft = document.createElement('i');
const chevronRight = document.createElement('i');

let listMedias = [];
let mediaIndex;
let counter = 0;

prevLink.className = "prev";
chevronLeft.className = "fa-solid fa-chevron-left fa-2xl";
prevLink.appendChild(chevronLeft);

nextLink.className = "next";
chevronRight.className = "fa-solid fa-chevron-right fa-2xl";
nextLink.appendChild(chevronRight);

medias.appendChild(prevLink);
medias.appendChild(nextLink);

function openMedia(parImage, parMapMedias, parFolder, parNameImg) {
    lightbox.setAttribute("tabindex","-1");
    prevLink.setAttribute("tabindex","1+");
    nextLink.setAttribute("tabindex","1+");
    closeImg.setAttribute("tabindex","1+");
    lightbox.focus();  
    main.setAttribute("aria-hidden", "true");           
    lightbox.setAttribute("aria-hidden", "false");
    body.classList.add("no-scroll");

    const srcImage = parImage.src;
    showImage(srcImage);
    listMedias = mapToListWithoutVideo(parMapMedias);
    
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

    lightbox.addEventListener("keyup", function(e) {
        if( e.key === "Escape") {
            closeMedia();
        }
        if(e.key === "ArrowLeft"){
            plusMedias(-1, mediaIndex, listMedias, parFolder);
        }
        if(e.key === "ArrowRight"){
            plusMedias(1, mediaIndex, listMedias, parFolder);
        }
    })
}

function closeMedia() {
    main.setAttribute("aria-hidden", "false");
    lightbox.setAttribute("aria-hidden", "true");
    body.classList.remove("no-scroll");
    lightbox.style.display = "none";
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
    let pathImage = parFolder + parListMedias[locIdx];
    showImage(pathImage);
}

function showImage(parImage) {
    imageElement.setAttribute('src', parImage);
    imageElement.id = "image-modale";
    medias.appendChild(imageElement); 
}



