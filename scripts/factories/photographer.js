function photographerFactory(data) {
    console.log(data);
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link1 = document.createElement('a');
        let locURL = "photographer.html?id=" + id ;
        link1.setAttribute("href", locURL);
        link1.setAttribute("aria-label","lien vers la page de présentation du photographe");
        

        const link2 = document.createElement('a');
        link2.setAttribute("href", locURL);
        link2.setAttribute("aria-label","lien vers la page de présentation du photographe");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photographie représentant le photographe " + name);
        
        
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const locDiv = document.createElement('div');
        
        const textCity = document.createElement('p');
        textCity.className = 'card-city';
        textCity.textContent = city + ', ' + country;
        
        const textTagline= document.createElement('p');
        textTagline.className = 'card-tagline';
        textTagline.textContent = tagline;

        const textPrice = document.createElement('p');
        textPrice.className='card-price'
        textPrice.textContent = price + '€/jour';

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
    return { name, picture, getUserCardDOM }
}