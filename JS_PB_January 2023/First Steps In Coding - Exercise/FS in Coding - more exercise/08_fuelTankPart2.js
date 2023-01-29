function fuelTankPart2(input) {
    // •	Бензин – 2.22 лева за един литър, 
    // •	Дизел – 2.33 лева за един литър
    // •	Газ – 0.93 лева за литър
    // •	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
    // •	Количество гориво – реално число в интервала [1.00 … 50.00]
    // •	Притежание на клубна карта – текст с възможности: "Yes" или "No"
    let type = input[0];
    let litres = Number(input[1]);
    let clubCard = input[2];

    let gasolinCost = 2.22;
    let dieselCost = 2.33;
    let gasCost = 0.93;
    let totalPrice = 0;

    switch (type) {
        case 'Gas':
            if (clubCard === 'Yes') {
                gasCost -= 0.08;
                totalPrice = litres * gasCost;
            } else {
                totalPrice = litres * gasCost;

            } break;
        case 'Gasoline':
            if (clubCard === 'Yes') {
                gasolinCost -= 0.18;
                totalPrice = litres * gasolinCost
            } else {
                totalPrice = litres * gasolinCost
            }
            break;
        case 'Diesel':
            if (clubCard === 'Yes') {
                dieselCost -= 0.12;
                totalPrice = litres * dieselCost
            } else {
                totalPrice = litres * dieselCost

            }
            break;

    }
    if (litres > 20 && litres <= 25) {
        totalPrice *= 0.92;
    } else if (litres > 25) {
        totalPrice *= 0.90;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
fuelTankPart2(['Diesel',
    '19',
    'No'
])