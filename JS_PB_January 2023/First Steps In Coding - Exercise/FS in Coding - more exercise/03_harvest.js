function harvest(input) {
    // •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
    // •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
    // •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
    // •	4ти ред: брой работници – цяло число в интервала [1 … 20]
    let x = Number(input[0]);
    let y = Number(input[1]);
    let neededLitresWine = Number(input[2]);
    let workers = Number(input[3]);
    let totalGrapes = x * y;
    let producedWine = (totalGrapes * 0.40) / 2.5;



    if (producedWine < neededLitresWine) {
        let neededquantity = neededLitresWine - producedWine
        console.log(`It will be a tough winter! More ${Math.floor(neededquantity)} liters wine needed.`)
    }
    else if (producedWine >= neededLitresWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`)
        console.log(`${Math.ceil(producedWine - neededLitresWine)} liters left -> ${Math.ceil((producedWine - neededLitresWine) / workers)} liters per person.`)
    }
}
harvest
    ([
        "650",
        "2",
        "175",
        "3",
    ])