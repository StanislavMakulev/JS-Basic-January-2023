function fuelTank(input) {
    let fuelType = input[0];
    let litres = Number(input[1]);

    if (fuelType !== "Gas" && fuelType !== "Diesel" && fuelType !== "Gasoline") {
        console.log('Invalid fuel!')
    }
    if (fuelType === "Gas" || fuelType === "Diesel" || fuelType === "Gasoline") {
        if (litres >= 25) {
            console.log(`You have enough ${fuelType}.`)
        }
        else if (litres < 25) {
            console.log(`Fill your tank with ${fuelType}!`)

        }
    }

}

fuelTank(["Gasy", "0"])