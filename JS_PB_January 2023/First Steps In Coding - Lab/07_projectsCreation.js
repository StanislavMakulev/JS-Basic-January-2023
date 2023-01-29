function projectsCreation(input) {
    let name = input[0];
    let projectsCount = Number(input[1]);
    let projectTime = projectsCount * 3; // на проект по 3 часа

    console.log(`The architect ${name} will need ${projectTime} hours to complete ${projectsCount} project/s.`)


}
projectsCreation(["George ",
    "4 "])
