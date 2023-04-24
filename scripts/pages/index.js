   
     
    async function getPhotographers() {

        let jsonData = fetch('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log("Erreur de récupération des données");
                console.log(err);
            });
        return jsonData
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel =  photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers }  = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
