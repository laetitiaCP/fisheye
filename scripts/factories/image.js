function imageDisplay(folder, nameImg) {
    const img = document.createElement('img');
    const pathImg = folder + nameImg;
    img.setAttribute("src", pathImg);
    img.setAttribute("alt", "photographie");


return img;
}