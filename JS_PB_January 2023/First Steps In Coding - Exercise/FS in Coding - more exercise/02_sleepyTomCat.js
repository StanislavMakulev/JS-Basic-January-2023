function sleepyTomCat(input) {
    // •	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
    // •	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
    let daysOFF = Number(input[0]);
    let target = 30000;
    let yearDays = 365;
    let workingDays = yearDays - daysOFF
    let totalPlayTime = workingDays * 63 + daysOFF * 127;
    let diff = Math.abs(target - totalPlayTime);
    let h = Math.floor(diff/60);
    let min = diff % 60;
    
    if (totalPlayTime > target){
        console.log('Tom will run away')
        console.log(`${h} hours and ${min} minutes more for play`)
    } else if (totalPlayTime < target){
        console.log('Tom sleeps well')
        console.log(`${h} hours and ${min} minutes less for play`)

    }
}
sleepyTomCat(['20'])