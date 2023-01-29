function petShop(input) {
    let dogfoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);

    let dogFoodPrice = dogfoodCount * 2.50;
    let catFoodPrice = catFoodCount * 4;
    let result = dogFoodPrice + catFoodPrice;

    console.log(`${result} lv`)


}
petShop(["13",
    "9"])
