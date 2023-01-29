function poolDay(input) {
//     1.	Първи ред – брой на хората. Цяло число в интервала [1…100]
// 2.	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
// 3.	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
// 4.	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00] 
    let peopleCount = Number(input[0]);
    let entryTax = Number(input[1]);
    let sunBedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let totalTax = peopleCount * entryTax;

    let totalSunBed = Math.ceil(peopleCount * 0.75) 
    let totalUmbrella = Math.ceil(peopleCount / 2) 

    let finalSum = totalTax + totalSunBed * sunBedPrice + totalUmbrella * umbrellaPrice

    console.log(`${finalSum.toFixed(2)} lv. `)
}
poolDay(["21",
"5.50",
"4.40",
"6.20"])
