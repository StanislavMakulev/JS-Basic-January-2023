function sumSeconds(input) {
    let fistTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirhTime = Number(input[2]);

    let totalTime = fistTime + secondTime + thirhTime
    let minute = Math.trunc(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minute}:0${seconds}`)
    } else {
        console.log(`${minute}:${seconds}`)
    }


}
sumSeconds(["50",
    "50",
    "49"])

