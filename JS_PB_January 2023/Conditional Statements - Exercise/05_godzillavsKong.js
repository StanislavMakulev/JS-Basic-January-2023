function godzillavsKong(input) {
    // 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
    // 2.	Брой на статистите – цяло число в интервала [1 … 500]
    // 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
    // •	Декорът за филма е на стойност 10% от бюджета. 
    // •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

    let buget = Number(input[0]);
    let statistCount = Number(input[1]);
    let garmentPrice = Number(input[2]);
    let decorCost = buget * 0.10;


    if (statistCount > 150) {
        garmentPrice *= 0.90;
    }
    let totalExpenses = statistCount * garmentPrice + decorCost;
    if (totalExpenses <= buget) {

        console.log("Action!")
        console.log(`Wingard starts filming with ${(buget - (totalExpenses)).toFixed(2)} leva left.`)

    } else {

        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalExpenses - buget).toFixed(2)} leva more.`)
    }

}

godzillavsKong(["9587.88",
    "222",
    "55.68"])







