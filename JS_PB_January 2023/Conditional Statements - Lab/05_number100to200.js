function number100to200(input) {
    // •	под 100 отпечатайте: "Less than 100"
    // •	между 100 и 200 отпечатайте: "Between 100 and 200"
    // •	над 200 отпечатайте: "Greater than 200"
    let num = Number(input[0]);

    if (num < 100) {
        console.log('Less than 100');
    } else if (num <= 200) {
        console.log('Between 100 and 200')
    } else if (num > 200) {
        console.log('Greater than 200')
    }
}
number100to200(["2000"])