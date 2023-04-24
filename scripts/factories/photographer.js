function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
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

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(textCity);
        article.appendChild(textTagline);
        article.appendChild(textPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}