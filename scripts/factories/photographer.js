function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement('a');
        let locURL = "photographer.html?id=" + id + "&name=" + name + "&portrait=" + portrait + "&city=" + city + "&country=" + country + "&tagline=" + tagline ;
        link.setAttribute("href", locURL);
        link.setAttribute("aria-label","lien vers la page de présentation du photographe");
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photographie représentant le photographe " + name);
        
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const textCity = document.createElement('p');
        textCity.className = 'card-city';
        textCity.textContent = city + ', ' + country;
        
        const textTagline= document.createElement('p');
        textTagline.className = 'card-tagline';
        textTagline.textContent = tagline;

        const textPrice = document.createElement('p');
        textPrice.className='card-price'
        textPrice.textContent = price + '€/jour';
        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(textCity);
        article.appendChild(textTagline);
        article.appendChild(textPrice);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}