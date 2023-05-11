function videoDisplay(parFolder, parNameVideo, parTitleImg) {
    const video = document.createElement('video');
    const source = document.createElement('source');
    const pathVideo = parFolder + parNameVideo;
    video.setAttribute("controls", "true");
    video.addEventListener("click", function(){ openMedia(this)});
    source.setAttribute("src", pathVideo);
    source.setAttribute("alt", "video" + parTitleImg);
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);

return video;
}