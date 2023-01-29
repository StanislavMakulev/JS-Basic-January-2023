function trekkingMania(input) {

    // •	Група до 5 човека – изкачват Мусала
    // •	Група от 6 до 12 човека – изкачват Монблан
    // •	Група от 13 до 25 човека – изкачват Килиманджаро
    // •	Група от 26 до 40 човека –  изкачват К2
    // •	Група от 41 или повече човека – изкачват Еверест

    let groupsCount = Number(input[0]);
    let mussala = 0;
    let monblan = 0;
    let kilimadzharo = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeopleIngroup = 0

    for (i = 0; i < groupsCount; i++) {
        let currentPeopleInGroup = Number(input[i + 1]);
        totalPeopleIngroup += currentPeopleInGroup


        if (currentPeopleInGroup <= 5) {
            mussala += currentPeopleInGroup


        }
        else if (currentPeopleInGroup <= 12) {
            monblan += currentPeopleInGroup


        }
        else if (currentPeopleInGroup <= 25) {
            kilimadzharo += currentPeopleInGroup


        }
        else if (currentPeopleInGroup <= 40) {
            k2 += currentPeopleInGroup


        }
        else if (currentPeopleInGroup >= 41) {
            everest += currentPeopleInGroup


        }

    }
    console.log(((mussala / totalPeopleIngroup) * 100 ).toFixed(2) + "%")
    console.log(((monblan / totalPeopleIngroup) * 100).toFixed(2) + "%")
    console.log(((kilimadzharo / totalPeopleIngroup) * 100).toFixed(2) + "%")
    console.log(((k2 / totalPeopleIngroup) * 100).toFixed(2) + "%")
    console.log(((everest / totalPeopleIngroup) * 100).toFixed(2) + "%")

}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
