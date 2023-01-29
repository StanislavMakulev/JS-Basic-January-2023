function celsiusToFahrenheit(input){
    //T (° F) = T (° C) × 9/5 + 32
    let tempC = Number(input[0]);
    let tempF = tempC * 9/5 + 32;

    console.log(tempF.toFixed(2))
}
celsiusToFahrenheit(["25"])