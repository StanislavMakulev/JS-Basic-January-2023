function hotelRoom(input) {

    let month = input[0];
    let nightCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = nightCount * 50;
        apartmentPrice = nightCount * 65;

    } else if (month === "June" || month === "September") {
        studioPrice = nightCount * 75.20;
        apartmentPrice = nightCount * 68.70;
    } else if (month === "July" || month === "August") {
        studioPrice = nightCount * 76;
        apartmentPrice = nightCount * 77;
    }

    if ((nightCount > 7 && nightCount <= 14) && (month === "May" || month === "October")) {
        studioPrice *= 0.95;
    } else if (nightCount > 14 && (month === "May" || month === "October")) {
        studioPrice *= 0.70;
    } else if (nightCount > 14 && (month === "June" || month === "September")) {
        studioPrice *= 0.80;
    }

    if (nightCount > 14) {
        apartmentPrice *= 0.90;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}