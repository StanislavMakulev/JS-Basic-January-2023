function weatherForecastPart2(input) {
    let temp = Number(input[0]);
    // Градуси	        Време
    // 26.00 - 35.00	Hot
    // 20.1 - 25.9	    Warm
    // 15.00 - 20.00	Mild
    // 12.00 - 14.9	    Cool
    // 5.00 - 11.9	    Cold

    if (temp >= 26 && temp <= 35) {
        console.log("Hot")
    }
    else if (temp >= 20.1 && temp <= 25.9) {
        console.log("Warm")
    }
    else if (temp >= 15.00 && temp <= 20.00) {
        console.log("Mild")

    } else if (temp >= 12.00 && temp <= 14.9) {
        console.log("Cool")
    } else if (temp >= 5 && temp <= 11.9) {
        console.log("Cold")
    } else {
        console.log("unknown")
    }


}
weatherForecastPart2(["8"])