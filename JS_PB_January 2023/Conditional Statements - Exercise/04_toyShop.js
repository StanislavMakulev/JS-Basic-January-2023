function toyShop(input) {
    // •	Пъзел - 2.60 лв.
    // •	Говореща кукла - 3 лв.
    // •	Плюшено мече - 4.10 лв.
    // •	Миньон - 8.20 лв.
    // •	Камионче - 2 лв.
    // 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
    // 2.	Брой пъзели - цяло число в интервала [0… 1000]
    // 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
    // 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
    // 5.	Брой миньони - цяло число в интервала [0 … 1000]
    // 6.	Брой камиончета - цяло число в интервала [0 … 1000
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5])

    let puzzleCost = 2.60;
    let dollsCost = 3;
    let teddyBearCost = 4.10;
    let minionCost = 8.20;
    let truckCost = 2;

    let totalOrderedToys = puzzleCount + dollsCount + teddyBearsCount + minionsCount + trucksCount
    let totalPrice = puzzleCount * puzzleCost + dollsCount * dollsCost + teddyBearsCount * teddyBearCost + minionsCount * minionCost
        + truckCost * trucksCount;
    let totalPriceWithRent = totalPrice - (totalPrice * 0.10);

    if (totalOrderedToys >= 50) {
        totalPriceWithRent *= 0.75;
    }

    if (totalPriceWithRent >= tripPrice) {
        let moreMoney = totalPriceWithRent - tripPrice
        console.log(`Yes! ${(moreMoney).toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = tripPrice - totalPriceWithRent
        console.log(`Not enough money! ${(moneyNeeded).toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])


