function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement( 'article' );

    const link1 = document.createElement('a');
    let locURL = "photographer.html?id=" + id ;
    link1.setAttribute("href", locURL);
    link1.setAttribute("aria-label","lien vers la page de présentation du photographe " + name );
        

    const link2 = document.createElement('a');
    link2.setAttribute("href", locURL);
    link2.setAttribute("aria-label","lien vers la page de présentation du photographe " + name);

    const img = document.createElement( 'img' );
    img.setAttribute("id", "image-photographer")
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photographie représentant le photographe " + name);
    img.setAttribute("photographId", id);
        
        
    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    h2.setAttribute("aria-label", "name: " + name);

    const locDiv = document.createElement('div');
        
    const textCity = document.createElement('p');
    textCity.className = 'card-city';
    textCity.textContent = city + ', ' + country;
    textCity.setAttribute("aria-label", "ville: " + city + "pays: " +country);
        
    const textTagline= document.createElement('p');
    textTagline.className = 'card-tagline';
    textTagline.textContent = tagline;
    textTagline.setAttribute("aria-label", "tagline: " + tagline);

    const textPrice = document.createElement('p');
    textPrice.className='card-price'
    textPrice.textContent = price + '€/jour';
    textPrice.setAttribute("aria-label", "prix: " + price + ' €/jour' );

    link2.appendChild(h2)
    locDiv.appendChild(link2);
    locDiv.appendChild(textCity);
    locDiv.appendChild(textTagline);
    locDiv.appendChild(textPrice);
        
    link1.appendChild(img);
    article.appendChild(link1);
    article.appendChild(locDiv);

    return (article);
  }

  function getPhotographerHeader() {
    const article = document.createElement( 'article' );
        
    const img = document.createElement( 'img' );
    img.setAttribute("id", "image-photographer")
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photographie représentant le photographe " + name);
    img.setAttribute("photographId", id);
        
    const h1 = document.createElement( 'h1' );
    h1.textContent = name;
    h1.setAttribute("aria-label", "name: " + name);

    const locDiv = document.createElement('div');
        
    const textCity = document.createElement('p');
    textCity.className = 'card-city';
    textCity.textContent = city + ', ' + country;
    textCity.setAttribute("aria-label", "ville: " + city + "pays: " +country);
        
    const textTagline= document.createElement('p');
    textTagline.className = 'card-tagline';
    textTagline.textContent = tagline;
    textTagline.setAttribute("aria-label", "tagline: " + tagline);

    const textPrice = document.createElement('p');
    textPrice.className='card-price'
    textPrice.textContent = price + '€/jour';
    textPrice.setAttribute("aria-label", "prix: " + price + ' €/jour' );

    locDiv.appendChild(h1);
    locDiv.appendChild(textCity);
    locDiv.appendChild(textTagline);
    locDiv.appendChild(textPrice);
        
    article.appendChild(img);
    article.appendChild(locDiv);

    return (article);
  }
  return { name, picture, getUserCardDOM, getPhotographerHeader}
}