function suppliesForSchool(input) {
    /*
    •	Брой пакети химикали - цяло число в интервала [0...100]
    •	Брой пакети маркери - цяло число в интервала [0...100]
    •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
    •	Процент намаление - цяло число в интервала [0...100]
    •	Пакет химикали - 5.80 лв. 
    •	Пакет маркери - 7.20 лв. 
    •	Препарат - 1.20 лв (за литър)
    
    
    */
    let pensPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3])/100;
    let totalSum = (pensPack * 5.80 + markersPack * 7.20 + detergent * 1.20) * 0.75;

    console.log(totalSum)
}
suppliesForSchool(["2 ",
    "3 ",
    "4 ",
    "25 "]
)