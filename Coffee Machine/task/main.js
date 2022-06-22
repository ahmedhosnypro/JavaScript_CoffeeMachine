const input = require('sync-input')

start();

function start() {
    console.log(`Write how many cups of coffee you will need:`);

    let cupsNum = Number(input());
    calcIngredients(cupsNum);
}


function calcIngredients(cups) {
    console.log("For 25 cups of coffee you will need:");
    console.log((cups * 200).toString() + " ml of water");
    console.log((cups * 50).toString() + " ml of milk");
    console.log((cups * 15).toString() + " g of coffee beans");
}