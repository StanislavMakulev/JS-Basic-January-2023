function flowerShop(input) {

    // От общата сума, Мария трябва да плати 5% данъци.
    // •	Брой магнолии – цяло число в ин•	Брой магнолии – цяло число в интервала [0 … 50]
    // •	Брой зюмбюли – цяло число в интервала [0 … 50]
    // •	Брой рози – цяло число в интервала [0 … 50]
    // •	Брой кактуси – цяло число в интервала [0 … 50]
    // •	Цена на подаръка – реално число в интервала [0.00 … 500.00]
    // нтервала [0.00 … 500.00]
    let magnoliaCost = 3.25;
    let zumbiulCost = 4;
    let roseCost = 3.50;
    let cactusCost = 8;

    let magnoliaCount = Number(input[0]);
    let zombiulCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalSum = magnoliaCount * magnoliaCost + zumbiulCost * zombiulCount + roseCost * roseCount + cactusCost * cactusCount;
    let tax = 0.05 * totalSum;
    let finalSum = totalSum - tax;

    if (finalSum >= giftPrice) {
        console.log(`She is left with ${Math.trunc(finalSum - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalSum)} leva.`)
    }


}
flowerShop([
    '15',
'7',
'5',
'10',
'100',

])