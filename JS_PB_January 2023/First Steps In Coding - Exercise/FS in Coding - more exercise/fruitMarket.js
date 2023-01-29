function fruitMarket(arg1, arg2, arg3, arg4, arg5) {
 
    let strawberryPrice = arg1
    let bananaQuantity = arg2
    let orangeQuantity = arg3
    let raspberryQuantity = arg4
    let strawberryQuantity = arg5

    let raspberryPrice = (0.5 * strawberryPrice);
    let orangePrice = (raspberryPrice * 0.60);
    let bananaPrice = (0.20 * raspberryPrice);

    let totalPrice = (strawberryPrice * strawberryQuantity + raspberryPrice * raspberryQuantity
        + orangePrice * orangeQuantity + bananaPrice * bananaQuantity)

    console.log(totalPrice.toFixed(2))
}
fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7,
)
