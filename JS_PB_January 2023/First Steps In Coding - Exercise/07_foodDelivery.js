function foodDelivery(input){
/*
•	Брой пилешки менюта – цяло число в интервала [0 … 99]
•	Брой менюта с риба – цяло число в интервала [0 … 99]
•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
•	Пилешко меню –  10.35 лв. 
•	Меню с риба – 12.40 лв. 
•	Вегетарианско меню  – 8.15 лв. 

*/
    let chikenMenus = Number(input[0]) * 10.35;
    let fishMenus = Number(input[1]) * 12.40;
    let veggiMenus = Number(input[2]) * 8.15;
    let delivery = 2.50;
    let totalPrice = chikenMenus + fishMenus + veggiMenus
    let dessert = totalPrice * 0.20;
    totalPrice = chikenMenus + fishMenus + veggiMenus + dessert + delivery
    console.log(totalPrice)

}
foodDelivery(["2 ",
"4 ",
"3 "]
)