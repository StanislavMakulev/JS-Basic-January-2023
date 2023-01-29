function careOfPuppy(input) {
    let index = 0;
    let food = input[index] * 1000;
    index++;

    let command = input[index];
    index++;
    let totalFood = 0;

    while (command !== 'Adopted') {

        let currentFood = Number(command);
        totalFood += currentFood;

        if (command == 'Adopted') {
            break;
        }


        command = input[index];
        index++;
    }
    if (totalFood <= food) {
        let foodLeft = food - totalFood
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`)
    } else {
        let foodMore = totalFood - food
        console.log(`Food is not enough. You need ${foodMore} grams more.`)
    }
}
careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])

