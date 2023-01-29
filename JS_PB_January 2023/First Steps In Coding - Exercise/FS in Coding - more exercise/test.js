function familyTrip(input) {
    // •	Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
    // •	Брой нощувки – цяло число в интервала [0 … 1000]
    // •	Цена за нощувка – реално число в интервала [1.00 … 500.00]
    // •	Процент за допълнителни разходи – цяло число в интервала [0 … 100]
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentMoreExpence = Number(input[3]) / 100;
    let totalPrice = 0;


    if (nights > 7) {
        pricePerNight *= 0.95;
        totalPrice = (pricePerNight * nights) + (percentMoreExpence * budget)
    } else {
        totalPrice = (pricePerNight * nights) + (percentMoreExpence * budget)
    }

    if (totalPrice <= budget) {

        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`)

    } else if (totalPrice > budget) {
        console.log(`${((totalPrice - budget).toFixed(2))} leva needed.`)
    }

}

familyTrip(["500",
    "7",
    "66",
    "15"])





