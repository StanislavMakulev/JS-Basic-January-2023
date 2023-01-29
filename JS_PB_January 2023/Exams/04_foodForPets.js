function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalFood = Number(input[index]);
    index++;
    let surprice = 0;
    let totalCatFood = 0;
    let totalDogFood = 0;


    for (let currentDay = 1; currentDay <= days; currentDay++) {
        let currentFoodDog = Number(input[index]);
        index++
        let currentFoodCat = Number(input[index]);
        index++;

        if (currentDay % 3 === 0) {
            surprice += (0.10 * (currentFoodCat + currentFoodDog));

        }
        totalCatFood += currentFoodCat;
        totalDogFood += currentFoodDog;

    }
    let percentEatenFood = ((totalCatFood + totalDogFood) / totalFood) * 100;
    let percentDogFood = (totalDogFood / (totalCatFood + totalDogFood)) * 100;
    let percentCatFood = (totalCatFood / (totalCatFood + totalDogFood)) * 100;
    console.log(`Total eaten biscuits: ${Math.round(surprice)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`)
}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])



