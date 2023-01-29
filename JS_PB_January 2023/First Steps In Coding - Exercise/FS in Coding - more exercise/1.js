function foodDelivery(input) {

    let chickenCount = Number(input[0])
    let fishCount = Number(input[1])
    let vegieCount = Number(input[2])

    let chickenPrice = 10.35
    let fishPrice = 12.40
    let vegieCountPrice = 8.15
    let delivery = 2.50

    let mainDishesPrice = chickenCount * chickenPrice + fishCount * fishPrice + vegieCount * vegieCountPrice
    let desertPrice = mainDishesPrice * 0.2
    let finalPrice = mainDishesPrice + desertPrice + delivery
    console.log(finalPrice)
}
foodDelivery(["2", "4", "3"])