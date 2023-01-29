function mountainRun(input) {
    // 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
    // 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
    // 3.	Времето в секунди, за което изкачва 1 м. – реално число в интервала [0.00 … 1000.00]
    let recordSeconds = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timePerMeterInSec = Number(input[2]);
    let totalTime = distanceMetres * timePerMeterInSec;
    let delay = (Math.floor(distanceMetres / 50)) * 30;
    let totalTimeWithDelay = totalTime + delay;

    if (totalTimeWithDelay < recordSeconds) {
        console.log(`Yes! The new record is ${totalTimeWithDelay.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(totalTimeWithDelay - recordSeconds).toFixed(2)} seconds slower.`)
    }


}
mountainRun(["1377",
"389",
"3"])


