
async function sortMedias(parValue) {
  const { photographers, media } = await getPhotographers();
  const photographId = document.getElementById("image-photographer").getAttribute("photographId");
  const mediasSection = document.querySelector(".medias-section");
  let listMedias = [];
  let photographer = [];
    
  for(let i=0; i <photographers.length; i++) {
        
    if(photographers[i].id === parseInt(photographId)){
      photographer = photographers[i];
    }
  }


  for (let i=0; i < media.length; i++) {
    if(media[i].photographerId === parseInt(photographId)) {
      listMedias.push(media[i]);
    }
  }

  document.getElementById("medias-article").remove();
  document.getElementById("total-number-likes").remove();
  document.getElementById("icone-heart").remove();
  document.getElementById("price-journey").remove();

  switch(parValue) {
    case "date": sort(getSortOrderForDate, "date");
      break;
    case "popularite": sort(getSortOrder, "likes");
      break;
    case "titre": sort(getSortOrder, "title");
      break;
  }


  function sort(parComparator, parParam) {
    listMedias.sort(parComparator(parParam));
    const mediaModel = mediaFactory(photographer, listMedias);
    const userMedias = mediaModel.getUserMedias();
    mediasSection.appendChild(userMedias);
  }
}

/**
 * fonction de comparaison à utiliser avec sort()
 * @param {String} prop 
 * @returns int
 */
function getSortOrder(prop) {
  return function(a, b) {
    if(a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]){
      return -1;
    }
    return 0;
  }
}

function getSortOrderForDate(prop) {
  return function(a, b) {
    new Date(b[prop]) - new Date(a[prop])
  }
}


   