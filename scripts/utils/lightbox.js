const lightbox = document.getElementById("lightbox");
const closeImg =  document.getElementById("close-img");
const medias = document.getElementById('myMedias');
const imageElement = document.createElement('img');
const videoElement = document.createElement('video');
const sourceVideo = document.createElement('source');
const prevLink = document.createElement('a');
const nextLink = document.createElement('a');
const chevronLeft = document.createElement('i');
const chevronRight = document.createElement('i');

let listMedias = [];
let mediaIndex;
let counter = 0;

prevLink.className = "prev";
prevLink.setAttribute("aria-label", "bouton média précédent");
chevronLeft.className = "fa-solid fa-chevron-left fa-2xl";
prevLink.appendChild(chevronLeft);

nextLink.className = "next";
nextLink.setAttribute("aria-label", "bouton média suivant");
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

  let srcImage;
  if(!parImage.src) {
    let locSource = document.getElementsByTagName('source');
    srcImage = locSource[0].src;
  } else {
    srcImage = parImage.src;
  }

  let locSplitSrc = String(srcImage).split('fisheye/fisheye/');
  showImage(locSplitSrc[1]);
  listMedias = mapToList(parMapMedias);
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

function showImage(parPathImage) {
  let locElementTitle;
  if(!document.getElementById("title-lightbox")){
    let locElementH2 = document.createElement("h2")
    locElementH2.setAttribute("id", "title-lightbox");
    medias.appendChild(locElementH2);
 }
  
  locElementTitle = document.getElementById("title-lightbox");

  if(String(parPathImage).includes(".mp4")) {
    if (imageElement.id) {
      medias.removeChild(imageElement);
      imageElement.removeAttribute("id");
    }
    sourceVideo.setAttribute("src", parPathImage);
    videoElement.setAttribute("controls", "true");
    videoElement.setAttribute("tabindex", "+1");
    videoElement.id = "video-modale";
    videoElement.appendChild(sourceVideo);
    medias.appendChild(videoElement);
    let locTitle = findTitleWithPath(parPathImage);
    locElementTitle.textContent = locTitle;

  } else {
    if (videoElement.id) {
      medias.removeChild(videoElement);
      videoElement.removeAttribute("id");
    }
    imageElement.setAttribute('src', parPathImage);
    imageElement.id = "image-modale";
    medias.appendChild(imageElement);
    let locTitle = findTitleWithPath(parPathImage);
    locElementTitle.textContent = locTitle;
  }

  medias.appendChild(locElementTitle);
  
}



