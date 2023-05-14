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