function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;
    let mussalaCount = 0;
    let monBlanc = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    let totalPeople = 0;

    for (let i = index; i <= groupCount; i++) {

        let currentPeopleInGroup = Number(input[i]);

        totalPeople += currentPeopleInGroup

        if (currentPeopleInGroup <= 5) {
            mussalaCount += currentPeopleInGroup;
        } else if (currentPeopleInGroup <= 12) {
            monBlanc += currentPeopleInGroup;
        } else if (currentPeopleInGroup <= 25) {
            kilimandzharo += currentPeopleInGroup;
        } else if (currentPeopleInGroup <= 40) {
            k2 += currentPeopleInGroup;
        } else {
            everest += currentPeopleInGroup;
        }
    }

    let percentMussala = (mussalaCount / totalPeople) * 100;
    let percentMont = (monBlanc/ totalPeople) * 100;
    let percentkiliman = (kilimandzharo / totalPeople) * 100;
    let percentK2 = (k2/ totalPeople) * 100;
    let percentEverest = (everest/ totalPeople) * 100;
    
    console.log(percentMussala.toFixed(2) + '%')
    console.log(percentMont.toFixed(2) + '%')
    console.log(percentkiliman.toFixed(2) + '%')
    console.log(percentK2.toFixed(2) + '%')
    console.log(percentEverest.toFixed(2) + '%')
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
