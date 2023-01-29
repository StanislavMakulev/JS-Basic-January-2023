function suitcasesLoad(input) {
    let index = 0;
    let trunkCapacity = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let totalVolume = 0;
    let suitCounter = 0;
    let suitLoaded = 0;
    let freeSpace = 0;

    while (command !== 'End') {

        let currentSuitSize = Number(command);
        suitCounter++;
        freeSpace = trunkCapacity - totalVolume

        if (suitCounter % 3 === 0) {
            currentSuitSize *= 1.10;
        }
        totalVolume += currentSuitSize;
        if (freeSpace <= currentSuitSize) {
        console.log("No more space!")
        break;

        }
        suitLoaded ++;

        command = input[index];
        index++;
    }
    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
       

    }
    console.log(`Statistic: ${suitLoaded} suitcases loaded.`)
}
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"])

