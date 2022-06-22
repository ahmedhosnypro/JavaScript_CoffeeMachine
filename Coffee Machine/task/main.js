const input = require('sync-input')

calcNumberOfServings();

function calcNumberOfServings() {
    console.log("\"Write how many ml of water the coffee machine has:");
    let waterV = Number(input());

    console.log("Write how many grams of coffee beans the coffee machine has:");
    let milkV = Number(input());

    console.log("Write how many cups of coffee you will need:");
    let coffeeM = Number(input());

    console.log("Write how many cups of coffee you will need:");
    let wantedCups = Number(input());

    let cupsAvailable = (waterV / 200) >> 0;
    cupsAvailable = Math.max(cupsAvailable, (milkV / 50) >> 0);
    cupsAvailable = Math.max(cupsAvailable, (coffeeM / 15) >> 0);

    if (cupsAvailable === wantedCups) {
        console.log("Yes, I can make that amount of coffee\n")
    } else if (cupsAvailable < wantedCups) {
        console.log("No, I can make only $cupsAvailable cup(s) of coffee")
    } else {
        console.log(`Yes, I can make that amount of coffee (and even ${cupsAvailable - wantedCups} more than that)`);
    }
}