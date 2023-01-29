function basletballEquipments(input){
    let taxPerYear = Number(input[0]);
    let basketBallSneаkers = taxPerYear - (taxPerYear * 0.4);
    let basketballOutfit = basketBallSneаkers - (basketBallSneаkers * 0.2);
    let ball = 0.25 * basketballOutfit;
    let accessories = 1/5 * ball ;

    let totalTax = taxPerYear + basketBallSneаkers + basketballOutfit + ball + accessories;

    console.log(totalTax)
/*
•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

*/
}
basletballEquipments(["365 "]);