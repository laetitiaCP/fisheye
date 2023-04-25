function displayPhotographerDetails() {
    let locURL = (new URL(document.location)).searchParams;
    let locnom = locURL.get('name')
    console.log(locnom)
}

displayPhotographerDetails()