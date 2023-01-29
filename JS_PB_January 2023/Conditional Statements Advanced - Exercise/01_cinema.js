function cinema(input) {
    // •	Premiere – премиерна прожекция, на цена 12.00 лева.
    // •	Normal – стандартна прожекция, на цена 7.50 лева.
    // •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let income = 0;

    if (type === 'Premiere') {
        income = r * c * 12.00;
    }
    else if (type === 'Normal') {
        income = r * c * 7.50;
    } else {
        income = r * c * 5.00;
    }
    console.log(income.toFixed(2))
}
cinema(["Premiere",
    "10",
    "12"])
