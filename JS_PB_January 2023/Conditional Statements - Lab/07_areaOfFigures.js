function areaOfFigures(input) {

    let currentType = input[0];
    let result = 0;

    if (currentType === "square") {
        let a = Number(input[1]);
        result = a * a;
    } 
    else if (currentType === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
    } 
    else if (currentType === "circle") {
        let r = Number(input[1]);
        result = Math.PI * r * r;
    } else if (currentType === "triangle"){
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = a * h / 2
    }

    console.log(result.toFixed(3))
}
areaOfFigures(["square", "5"])
