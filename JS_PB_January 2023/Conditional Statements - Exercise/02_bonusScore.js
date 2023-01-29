function bonusScore(input) {
    //     •	Ако числото е до 100 включително, бонус точките са 5.
    // •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
    // •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

    // •	Допълнителни бонус точки (начисляват се отделно от предходните):
    // o	За четно число  + 1 т.
    // o	За число, което завършва на 5  + 2 т.

    let startingPoints = Number(input[0]);
    let bonusPoints = 0;


    if (startingPoints <= 100) {
        bonusPoints = 5
    }
    else if (startingPoints > 1000) {
        bonusPoints = startingPoints * 0.10;
    }
    else if (startingPoints > 100) {
        bonusPoints = startingPoints * 0.20;
    }

    if (startingPoints % 2 === 0) {
        bonusPoints++;
    }
    else if (startingPoints % 10 === 5) {
        bonusPoints += 2
    }
    console.log(bonusPoints)

    console.log(bonusPoints + startingPoints)
}
bonusScore(["2703"])