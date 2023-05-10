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