function imageDisplay(parFolder, parNameImg, parTitleImg) {
    const img = document.createElement('img');
    const pathImg = parFolder + parNameImg;
    
    img.setAttribute("src", pathImg);
    img.setAttribute("alt", "photographie");        
    img.setAttribute("aria-label", "photographie " + parTitleImg)
    return img;
}
