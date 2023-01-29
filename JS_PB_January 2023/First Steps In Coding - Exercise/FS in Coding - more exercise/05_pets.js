function pets(input) {
    // •	Първи ред – брой дни – цяло число в интервал [1…5000]
    // •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
    // •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
    // •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
    // •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

    let days = Number(input[0]);
    let totalFoodsKg = Number(input[1]);
    let dogFoodPerday = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4] / 1000)

    let sumFoodPerDay = (dogFoodPerday + catFoodPerDay + turtleFoodPerDay) * days;

    if (sumFoodPerDay <= totalFoodsKg) {
        console.log(`${Math.floor(totalFoodsKg - sumFoodPerDay)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(sumFoodPerDay - totalFoodsKg)} more kilos of food are needed.`)
    }
}
pets(['2',
    '10',
    '1',
    '1',
    '1200',
])