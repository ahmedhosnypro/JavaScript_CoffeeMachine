const input = require('sync-input')

let machine = {
    waterV: 400, milkV: 540, coffeeM: 120, disposableCups: 9, storedMoney: 550
};

let coffeeTypes = {
    espresso: {
        waterV: 250, milkV: 0, coffeeM: 16, cost: 4
    }, latte: {
        waterV: 350, milkV: 75, coffeeM: 20, cost: 7
    }, cappuccino: {
        waterV: 200, milkV: 100, coffeeM: 12, cost: 6
    }
};

(function () {
    printMachineStatus();
    runAction();
}());

function printMachineStatus() {
    console.log(`
The coffee machine has:
${machine.waterV} ml of water
${machine.milkV} ml of milk
${machine.coffeeM} g of coffee beans
${machine.disposableCups} disposable cups
$${machine.storedMoney} of money
`);
}

function runAction() {
    const action = input("Write action (buy, fill, take):").trim().toLowerCase();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
    }
}

function buy() {
    let choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");

    let coffeeType;
    switch (choice) {
        case "1":
            coffeeType = coffeeTypes["espresso"];
            break;
        case "2":
            coffeeType = coffeeTypes["latte"];
            break;
        default :
            coffeeType = coffeeTypes["cappuccino"];
            break;
    }

    tryBuyCoffee(coffeeType);
}

function tryBuyCoffee(coffeeType) {
    if (canMakeCoffee(coffeeType)) {
        buyCoffee(coffeeType);
        printMachineStatus();
    }
}

function canMakeCoffee(coffeeType, wantedCups) {
    let canMakeIt = true;
    let cupsAvailable;

    cupsAvailable = machine.waterV / coffeeType.waterV;

    if (coffeeType.name !== "espresso") {
        cupsAvailable = Math.max(cupsAvailable, (machine.milkV / coffeeType.milkV) >> 0);
    }

    cupsAvailable = Math.max(cupsAvailable, (machine.coffeeM / coffeeType.milkV) >> 0);

    if (cupsAvailable < wantedCups) {
        canMakeIt = false;
    }

    return canMakeIt;
}

function buyCoffee(coffeeType) {
    machine.waterV = machine.waterV - coffeeType.waterV;
    machine.milkV = machine.milkV - coffeeType.milkV;
    machine.coffeeM = machine.coffeeM - coffeeType.coffeeM;
    machine.disposableCups = machine.disposableCups - 1;
    machine.storedMoney = machine.storedMoney + coffeeType.cost;
}

function fill() {
    let waterV = input("Write how many ml of water you want to add:");
    let milkV = input("Write how many ml of milk you want to add:")
    let coffeeM = input("Write how many grams of coffee beans you want to add:");
    let cups = input("Write how many disposable cups of coffee you want to add:");

    machine.waterV += Number(waterV);
    machine.milkV += Number(milkV);
    machine.coffeeM += Number(coffeeM);
    machine.disposableCups += Number(cups);
    printMachineStatus();
}

function take() {
    if (machine.storedMoney > 0) {
        console.log(`I gave you $${machine.storedMoney}`);
        machine.storedMoney = 0;
        printMachineStatus();
    }
}