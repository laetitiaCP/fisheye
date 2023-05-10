function imageDisplay(folder, nameImg, parMapMedias) {
    const img = document.createElement('img');
    const pathImg = folder + nameImg;
    img.setAttribute("src", pathImg);
    img.setAttribute("alt", "photographie");
    /*
    img.onclick = function() {
        openMedia(this.src, parMapMedias, folder, nameImg);
    }*/
    
    return img;
}
