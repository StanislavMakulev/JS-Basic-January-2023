function depositCalculator(input) {
    let depositValue = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualIntRate = Number(input[2]) / 100;
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let sum = depositValue + depositTime * ((depositValue * annualIntRate) / 12);

    console.log(sum)
}
depositCalculator(["200 ",
    "3 ",
    "5.7 "])
