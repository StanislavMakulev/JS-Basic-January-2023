function fishingBoat(input) {


    let buget = Number(input[0]);
    let season = input[1];
    let fishmansCount = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case 'Spring':
            rentPrice = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            rentPrice = 4200;
            break;
        case 'Winter':
            rentPrice = 2600;
            break;
    }

    if (fishmansCount <= 6) {
        rentPrice *= 0.90;
    } else if (fishmansCount <= 11) {
        rentPrice *= 0.85;
    } else {
        rentPrice *= 0.75;
    }

    if (fishmansCount % 2 === 0 && season !== 'Autumn') {
        rentPrice *= 0.95;
    }

    if (buget >= rentPrice) {
        let moneyLeft = buget - rentPrice
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = rentPrice - buget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }


}
fishingBoat(["3600",
    "Autumn",
    "6"])



