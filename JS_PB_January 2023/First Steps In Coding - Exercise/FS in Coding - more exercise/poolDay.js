function poolDay(input){


   

    let peopleCount = Number(input[0]);
    let taxCost = Number(input[1]);
    let priceSunBed = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTax = peopleCount * taxCost;
    let totalUmbrella = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let totalSunBeds = Math.ceil(peopleCount * 0.75) * priceSunBed;

    let finalSum = totalTax + totalUmbrella + totalSunBeds;

    console.log(`${finalSum.toFixed(2)} lv)


}
poolDay(['2'])