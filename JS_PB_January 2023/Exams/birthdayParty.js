function birthdayParty(arg1) {

    //     тържеството:
    // •	Торта  – цената ѝ е 20% от наема на залата
    // •	Напитки – цената им е 45% по-малко от тази на тортата
    // •	Аниматор – цената му е 1/3 от цената за наема на залата
    // Вход

    let rent = arg1;

    let cake = 0.2 * rent;
    let drinks = cake * 0.55;
    let animator = 1 / 3 * rent

    let totalSum = rent + cake + drinks + animator;

    console.log(totalSum)

}
birthdayParty(2250)