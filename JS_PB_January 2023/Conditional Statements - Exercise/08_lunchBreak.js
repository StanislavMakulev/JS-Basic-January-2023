function lunchBreak(input) {
    // 1.	Име на сериал – текст
    // 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
    // 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
    let filmName = input[0];
    let filmduration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let restTime = (1 / 4) * breakDuration;
    let totalTime = lunchTime + restTime;
    let totalTimeForWatch = breakDuration - totalTime;

    if (totalTimeForWatch >= filmduration) {
        let timeMore = Math.ceil(totalTimeForWatch - filmduration)
        console.log(`You have enough time to watch ${filmName} and left with ${timeMore} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(filmduration - totalTimeForWatch)
        console.log(`You don't have enough time to watch ${filmName}, you need ${timeNeeded} more minutes.`);
    }



}
lunchBreak(["Teen Wolf",
"48",
"60"])

