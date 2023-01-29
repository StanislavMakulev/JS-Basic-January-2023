function transportPrice(input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];
    
    let result = 0;
    // •	Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
    // •	Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
    // •	Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.
    if (km < 20) {
        if (dayOrNight === 'day') {
            result = 0.70 + 0.79 * km;
        } else {
            result= 0.70 + 0.90 * km;

        }
    } else if (km  < 100) {
        if (dayOrNight === 'day' || dayOrNight === 'night') {
            result = 0.09 * km;
        }
    } else if (km >= 100) {
        if (dayOrNight === 'day' || dayOrNight === 'night') {
            result = 0.06 * km
        }
    }
    console.log(result.toFixed(2))
}
transportPrice
    (['180',
        'night',
    ])