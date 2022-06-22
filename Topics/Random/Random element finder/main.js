function getRomanNumber(array) {
    let randomIndex = Math.floor(Math.random() * (array.length - 1) + 1);
    return array[randomIndex];
}