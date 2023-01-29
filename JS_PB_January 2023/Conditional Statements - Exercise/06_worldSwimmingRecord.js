function worldSwimmingRecord(input) {
    // 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
    // 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
    // 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [
    let recordSec = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let windDelay = (Math.trunc(distance / 15) * 12.50)
    let totalTime = distance * timePerMeter + windDelay;

    if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])

