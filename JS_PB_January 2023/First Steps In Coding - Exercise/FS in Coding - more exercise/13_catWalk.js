function catWalk(input) {
    // •	На първия ред - минути разходка на ден - цяло число в интервала [1...50]
    // •	На втория ред - броят на разходките дневно - цяло число в интервала [1…10]
    // •	На третия ред - приетите от котката калории на ден – цяло число в интервала [100…4000]
    let minWalkPerDay = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let getCaloriesPerDay = Number(input[2]);
    let totalTimeWalks = walksPerDay * minWalkPerDay;
    let totalCaloriesBurn = totalTimeWalks * 5;

    if (totalCaloriesBurn >= 1 / 2 * getCaloriesPerDay) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurn}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurn}.`)
    }

}
catWalk(["30",
    "3",
    "600"])
