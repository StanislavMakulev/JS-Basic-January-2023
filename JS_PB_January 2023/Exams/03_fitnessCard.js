function fitnessCard(input) {
    // •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
    // •	Пол - символ ('m' за мъж и 'f' за жена)
    // •	Възраст - цяло число в интервала [5…105]
    // •	Спорт - текст (една от възможностите в таблицата)

    // Пол	    Gym	    Boxing	Yoga	Zumba	Dances	Pilates
    // мъж	    $42	    $41	    $45	    $34	    $51	    $39
    // жена	    $35	    $37	    $42	    $31	    $53	    $37

    let buget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let price = 0;
    switch (gender) {

        case 'm':
            switch (sport) {
                case 'Gym': price = 42; break;
                case 'Boxing': price = 41; break;
                case 'Yoga': price = 45; break;
                case 'Zumba': price = 34; break;
                case 'Dances': price = 51; break;
                case 'Pilates': price = 39; break;
            }

            break;

        case 'f':
            switch (sport) {
                case 'Gym': price = 35; break;
                case 'Boxing': price = 37; break;
                case 'Yoga': price = 42; break;
                case 'Zumba': price = 31; break;
                case 'Dances': price = 53; break;
                case 'Pilates': price = 37; break;
            }
            break;
    
    }
    if (age <= 19) {
        price *= 0.80;
    }
    if (buget >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neededMoney = price - buget
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`)
    }
}
fitnessCard(["10",
    "m",
    "50",
    "Pilates"])


