function imageDisplay(folder, nameImg) {
    const img = document.createElement('img');
    const pathImg = folder + nameImg;
    img.setAttribute("src", pathImg);
    img.setAttribute("alt", "photographie");
    img.setAttribute("onclick", "openMedia(this)");
    
    return img;
}
