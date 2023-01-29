function fishland(input) {

    //     •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
    // •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
    // •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
    // •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
    // •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]

    // •	Паламуд – 60% по-скъп от скумрията
    // •	Сафрид – 80% по-скъп от цацата
    // •	Миди – 7.50 лв. за килограм

    let mackerelPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMussels = Number(input[4]);
    let palamudPrice = mackerelPrice * 1.60;
    let safridPrice = cacaPrice * 1.80;
    let musselsPrice = 7.50;

    let totalPrice = (kgPalamud * palamudPrice + kgSafrid * safridPrice + kgMussels * musselsPrice);
    console.log(totalPrice.toFixed(2))


}
fishland(
    ["6.90",
        "4.20",
        "1.5",
        "2.5",
        "1",]
)