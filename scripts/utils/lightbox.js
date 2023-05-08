function openMedia(image) {
    const srcImage = image.src;
    window.addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "block";
        displayMedias(srcImage);
    })        
}

function displayMedias (parImage) {
    const medias = document.getElementById('myMedias');
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', parImage);
    medias.appendChild(imageElement);
}

function closeMedia() {
    const modal = document.getElementById("lightbox");
	window.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

let mediaIndex = 1;
showMedias(mediaIndex);

function plusMedia(n) {
    showMedias(mediaIndex += n);
}

function currentMedia(n) {
    showMedias(mediaIndex = n);
}

function showMedias(n) {
    let i;
    let medias = document.getElementById("myMedias");

    if(n > medias.length) {
        mediaIndex = 1;
    }

    if (n < 1) {
        mediaIndex = medias.length ;
    }

    for (i = 0; i < medias.length; i++) {
        medias[i].style.display = "none";
    }

    medias[mediaIndex-1].style.display = "block";
}

