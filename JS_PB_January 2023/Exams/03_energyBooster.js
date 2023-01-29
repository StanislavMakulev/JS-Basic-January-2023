function energyBooster(input) {
    // 1.	Плод - текст с възможности: "Watermelon", "Mango", "Pineapple" или "Raspberry"
    // 2.	Размерът на сета - текст с възможности: "small" или "big"
    // 3.	Брой на поръчаните сетове - цяло число в интервала [1 … 10000]
    let fruit = input[0];
    let packSize = input[1];
    let orderedPacks = Number(input[2]);

    let price = 0;

    switch (packSize) {
        case 'small':
            switch (fruit) {
                case 'Watermelon':
                    price = (2 * 56) * orderedPacks;
                    break;
                case 'Mango':
                    price = (2 * 36.66) * orderedPacks;
                    break;
                case 'Pineapple':
                    price = (2 * 42.10) * orderedPacks;
                    break;
                case 'Raspberry':
                    price = (2 * 20) * orderedPacks;
                    break;
            }

            break;

        case 'big':
            switch (fruit) {
                case 'Watermelon':
                    price = (5 * 28.70) * orderedPacks;
                    break;
                case 'Mango':
                    price = (5 * 19.60) * orderedPacks;
                    break;
                case 'Pineapple':
                    price = (5 * 24.80) * orderedPacks;
                    break;
                case 'Raspberry':
                    price = (5 * 15.20) * orderedPacks;
                    break;
            }
            break;
    }

    if (price >= 400 && price <= 1000) {
        price *= 0.85;
    } else if (price > 1000) {
        price *= 0.50;
    }
    console.log(`${price.toFixed(2)} lv.`)

}
energyBooster(["Raspberry",
"small",
"50"])



