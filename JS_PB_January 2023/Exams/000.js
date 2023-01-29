function godzillaVsKong(input) {
    let filmbudget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceDress = Number(input[2]);
    let pricedecorFilm = 0.10 * filmbudget;
    let totalPricedress = priceDress * countStatists;
    let totalCostsFilm = pricedecorFilm + totalPricedress;
    // let neededMoney = filmbudget - totalCostsFilm;
    if (countStatists >= 150) {
        totalPricedress = 0.90 * totalPricedress;
        totalCostsFilm = pricedecorFilm + totalPricedress
    } 
    
    if (totalCostsFilm <= filmbudget) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(filmbudget - totalCostsFilm).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalCostsFilm - filmbudget).toFixed(2)} leva more.`)
    }

}
godzillaVsKong(["15437.62",
    "186",
    "57.99"])

