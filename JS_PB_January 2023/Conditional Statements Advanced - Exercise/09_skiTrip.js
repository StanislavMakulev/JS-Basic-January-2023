function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedBack = input[2];
    let price = 0;

    switch (roomType) {
        case 'room for one person':
            price = 18;
            break;
        case 'apartment':
            price = 25;
            if (days <= 10) {
                price *= 0.70;
            } else if (days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case 'president apartment':
            price = 35;
            if (days <= 10) {
                price *= 0.90;
            } else if (days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;

    }

    let totalPrice = (days - 1) * price
    if (feedBack === 'positive') {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.90;
    }
    console.log(totalPrice.toFixed(2))
}
skiTrip(["30",
    "president apartment",
    "negative"])

