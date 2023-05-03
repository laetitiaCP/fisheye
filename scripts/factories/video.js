function videoDisplay(folder, nameVideo) {
    const video = document.createElement('video');
    const source = document.createElement('source');
    const pathVideo = folder + nameVideo;
    video.setAttribute("controls", "true");
    source.setAttribute("src", pathVideo);
    source.setAttribute("alt", "video");
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);

return video;
}