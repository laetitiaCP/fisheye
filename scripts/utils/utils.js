function mapToList(parMap) {
  let listOfValues = [];
  for (let element of parMap) {
    listOfValues.push(element[1]);
  }

  return listOfValues;
}

function mapToListWithoutVideo(parMap) {
  let listOfValues = [];
  for (let element of parMap) {
    if (String(element).includes(".jpg")) {
      listOfValues.push(element[1]);
    }
  }

  return listOfValues;
}

function goHome() {
  const logo = document.getElementById("goHome");
  logo.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
      document.location.href = new URL("index.html");
    }
  })
}

/**
 * Pour que l'icône du <select> effectue une rotation lorsque l'on clique sur le <select>
 */
function rotateIcone() {
  const icone = document.getElementById("iconeSelect");
  const isRotated = icone.getAttribute("isRotated");

  if(isRotated === "false") {
    icone.classList.remove("fa-chevron-down");
    icone.classList.add("fa-chevron-up");
    icone.setAttribute("isRotated", "true");
  } else {
    icone.classList.remove("fa-chevron-up");
    icone.classList.add("fa-chevron-down");
    icone.setAttribute("isRotated", "false");
  }
}

