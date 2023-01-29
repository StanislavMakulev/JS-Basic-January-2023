function shopping(input) {
    // 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
    // 2.	Броят видеокарти - цяло число в интервала [0…100]
    // 3.	Броят процесори - цяло число в интервала [0…100]
    // 4.	Броят рам памет - цяло число в интервала [0…100]
    // •	Видеокарта – 250 лв./бр.
    // •	Процесор – 35% от цената на закупените видеокарти/бр.
    // •	Рам памет – 10% от цената на закупените видеокарти/бр.

    let buget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);


    let videoCardPrice = videoCardCount * 250;
    let proccesorPrice = videoCardPrice * 0.35;
    let ramPrice = videoCardPrice * 0.10;

    let totalPrice = videoCardPrice + proccesorPrice * processorsCount + ramPrice * ramCount;

    if (videoCardCount > processorsCount) {
        totalPrice *= 0.85;
    }
    if (totalPrice > buget) {
        console.log(`Not enough money! You need ${(totalPrice - buget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(buget - totalPrice).toFixed(2)} leva left!`)
    }



}
shopping(["920.45",
    "3",
    "1",
    "1"])



