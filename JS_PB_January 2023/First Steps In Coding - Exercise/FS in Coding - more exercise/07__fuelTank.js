function fuelTank(input) {
    let type = input[0];
    let litres = Number(input[1]);

    // "Diesel", "Gasoline" или "Gas 
    //    гориво са повече или равни на 25, на конзолата да се отпечата "You have enough {вида на горивото}.", 
    //    ако са по-малко от 25, да се отпечата "Fill your tank with {вида на горивото}!".
    //     В случай, че бъде въведено гориво, различно от посоченото, да се отпечата "Invalid fuel!"

    switch (type) {
        case 'Diesel':
            if (litres >= 25) {
                console.log(`You have enough diesel.`);
            } else if (litres < 25) {
                console.log(`Fill your tank with diesel!`);
            } break;
        case 'Gasoline':
            if (litres >= 25) {
                console.log(`You have enough gasoline.`);
            } else if (litres < 25) {
                console.log(`Fill your tank with gasoline!`);
            } break;
        case 'Gas':
            if (litres >= 25) {
                console.log(`You have enough gas.`);
            } else if (litres < 25) {
                console.log(`Fill your tank with gas!`);
            } break;
        default:
            console.log(`Invalid fuel!`)

    }
}
fuelTank(['Gasoline',
    '40'
])