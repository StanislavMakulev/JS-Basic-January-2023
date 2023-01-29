function change(input) {
    // •	На първия ред – броят биткойни. Цяло число в интервала [0…20]
    // •	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
    // •	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]
    //     •	1 биткойн = 1168 лева.
    //     •	1 китайски юан = 0.15 долара.
    //     •	1 долар = 1.76 лева.
    //     •	1 евро = 1.95 лева.

    let bitcoins = Number(input[0]);
    let chinesIona = Number(input[1]);
    let comission = Number(input[2]) / 100;

    let bitTolv = bitcoins * 1168;
    let chIoanaToDolar = chinesIona * 0.15;
    let chIoanaToLev = chIoanaToDolar * 1.76;
    let totalLv = (bitTolv + chIoanaToLev);

    let lLvToEuro = totalLv / 1.95;
    let totalLvToEuro = lLvToEuro - (comission * lLvToEuro);

    console.log(totalLvToEuro.toFixed(2))


}
change(["20",
    "5678",
    "2.4"])

