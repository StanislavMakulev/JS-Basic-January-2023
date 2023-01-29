function birthdayParty(input) {
    let rentHall = Number(input[0]);
    //     •	Торта  – цената ѝ е 20% от наема на залата
    // •	Напитки – цената им е 45% по-малко от тази на тортата
    // •	Аниматор – цената му е 1/3 от цената за наема на залата
    let cakePrice = rentHall * 0.20;
    let drinks = cakePrice * 0.55;
    let amimator = 1 / 3 * rentHall;

    let totalMoney = rentHall + cakePrice + drinks + amimator;

    console.log(totalMoney)



}
birthdayParty(["3720"])