function journey(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let roomType = '';

    let price = 0
    if (season === 'summer') {
        roomType = 'Camp'
    } else {
        roomType = 'Hotel'
    }

    if (buget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            price = 0.30 * buget;
        } else {
            price = 0.70 * buget;
        }
    } else if (buget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            price = 0.40 * buget;
        } else {
            price = 0.80 * buget;
        }
    } else {
        destination = 'Europe'
        price = 0.90 * buget;
        roomType = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${roomType} - ${price.toFixed(2)}`)
}
journey(["1500", "summer"])