function housePainting(input) {
    //     1.	x – височината на къщата – реално число в интервала [2...100]
    // 2.	y – дължината на страничната стена – реално число в интервала [2...100]
    // 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let squareWallsArea = ((x * x) * 2) - (2 * 1.20);
    let rectangleWallsArea = ((x * y) * 2) - (2 * (1.5 * 1.5));
    let roofRectangleWallsArea = 2 * (x * y);
    let roofTriangleWallsArea = 2 * (x * h / 2);

    let totalAreaWalls = squareWallsArea + rectangleWallsArea;
    let totalAreaRoof = roofRectangleWallsArea + roofTriangleWallsArea;

    let greenColor = totalAreaWalls / 3.4;
    let redColor = totalAreaRoof / 4.3;

    console.log(greenColor.toFixed(2))
    console.log(redColor.toFixed(2))

}
housePainting
    ([
        "6",
        "10",
        "5.2",])