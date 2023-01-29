function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let buget = Number(input[2]);

    let totalPrice = 0;

    switch (flowerType) {
        case 'Roses':
            totalPrice = flowerCount * 5;
            break;
        case 'Dahlias':
            totalPrice = flowerCount * 3.80;
            break;
        case 'Tulips':
            totalPrice = flowerCount * 2.80;
            break;
        case 'Narcissus':
            totalPrice = flowerCount * 3;
            break;
        case 'Gladiolus':
            totalPrice = flowerCount * 2.50;
            break;
    }

    // •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
    // •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
    // •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
    // •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
    // •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
    if (flowerType === 'Roses' && flowerCount > 80) {
        totalPrice *= 0.90;
    } else if (flowerType === 'Dahlias' && flowerCount > 90) {
        totalPrice *= 0.85;
    } else if (flowerType === 'Tulips' && flowerCount > 80) {
        totalPrice *= 0.85;
    } else if (flowerType === 'Narcissus' && flowerCount < 120) {
        totalPrice *= 1.15;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80) {
        totalPrice *= 1.20;
    }

    if (buget >= totalPrice) {
        let moneyLeft = buget - totalPrice
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - buget
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }

}
newHouse(["Tulips",
"88",
"260"])

