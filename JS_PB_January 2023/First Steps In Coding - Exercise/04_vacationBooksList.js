function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = pages / pagesPerHour;
    let totalHour = totalTime / days;

    console.log(totalHour)

}
vacationBooksList(["432 ",
    "15 ",
    "4 "])
