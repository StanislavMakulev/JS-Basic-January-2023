function vegetableMarket(input) {
    /*
    •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
    •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
    •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
    •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
    
    */
    let kgVegCost = Number(input[0]);
    let kgFruitsCost = Number(input[1]);
    let totalVeggiKg = Number(input[2]);
    let totalFruitsKg = Number(input[3]);

    let totalCostEuro = (kgVegCost * totalVeggiKg + kgFruitsCost * totalFruitsKg) / 1.94;

    console.log(totalCostEuro.toFixed(2))
}
vegetableMarket(["0.194", "19.4", "10", "10"])