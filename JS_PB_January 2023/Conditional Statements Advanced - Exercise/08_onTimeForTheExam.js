function onTimeForTheExam(input) {
    // •	Първият съдържа час на изпита – цяло число от 0 до 23.
    // •	Вторият съдържа минута на изпита – цяло число от 0 до 59.
    // •	Третият съдържа час на пристигане – цяло число от 0 до 23.
    // •	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);
    let timeExam = hourExam * 60 + minExam;
    let timeArrive = hourArrive * 60 + minArrive;

    let diff = Math.abs(timeArrive - timeExam);
}
onTimeForTheExam(["9",
"30",
"9",
"50"])
