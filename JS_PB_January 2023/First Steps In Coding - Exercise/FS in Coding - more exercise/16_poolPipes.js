function poolPipes(input) {
    // •	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
    // •	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
    // •	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
    // •	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
    let volumePool = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let totalP1 = p1 * h;
    let totalP2 = p2 * h;
    let totalDebit = totalP1 + totalP2;

    if (totalDebit > volumePool) {
        console.log(`For ${h} hours the pool overflows with ${totalDebit - volumePool} liters.`)
    } else {
        console.log(`The pool is ${(totalDebit / volumePool) * 100}% full.
         Pipe 1: ${((totalP1 / totalDebit) * 100).toFixed(2)}%. Pipe 2: ${((totalP2 / totalDebit) * 100).toFixed(2)}%.`)
    }
}
poolPipes
    ([
        "1000",
        "100",
        "120",
        "3",
    ])