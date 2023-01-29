// function time15Minutes(input) {

//     let hours = Number(input[0]);
//     let minutes = Number(input[1]);
//     let time15Minutes = minutes + 15;



//     if (time15Minutes >= 60) {
//         hours += 1;
//         time15Minutes -= 60;
//     }

//     if (hours > 23){
//         hours = 0
//     }
//     if (time15Minutes < 10) {
//         console.log(`${hours}:0${time15Minutes}`)
//     } else {
//         console.log(`${hours}:${time15Minutes}`)
//     }

// }
// time15Minutes(["1", "46"])

function time15Minutes(input) {

    let hour = Number(input[0]);
    let minute = Number(input[1]);
    let hToMin = hour * 60;
    let totalTime = hToMin + minute + 15

    let h = Math.floor(totalTime / 60);
    let m = totalTime % 60
    
    if(h >= 24){
        h=0
    }
    if (m < 10) {
        console.log(`${h}:0${m}`)
    } else {
        console.log(`${h}:${m}`)

    }

}
time15Minutes(["12", "49"])