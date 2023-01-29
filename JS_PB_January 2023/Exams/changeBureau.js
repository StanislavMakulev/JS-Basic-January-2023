function changeBureau(input) {
//     •	На първия ред – броят биткойни. Цяло число в интервала [0…20]
//     •	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
//     •	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]
// •	1 биткойн = 1168 лева.
// •	1 китайски юан = 0.15 долара.
// •	1 долар = 1.76 лева.
// •	1 евро = 1.95 лева.
    let bitcoins = Number(input[0]);
    let chinaIuana = Number(input[1]);
    let comision = Number(input[2]) / 100;

    let bitToLv = bitcoins * 1168;
    let chToDollar = chinaIuana * 0.15;
    let dollarToLv = chToDollar * 1.76;

    let totalLv = bitToLv + dollarToLv;
    let totalExxeuro = (totalLv / 1.95) 

    let comisionSum = comision * totalExxeuro

    let finalSum = totalExxeuro - comisionSum

    console.log(finalSum.toFixed(2))

    
}
changeBureau(["20",
"5678",
"2.4"])

