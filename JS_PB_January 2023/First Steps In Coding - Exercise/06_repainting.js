function pepainting(input){
    let naylonQuantity = Number(input[0]);
    let painQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);
     
    let additionalPaintQuantity = 0.10 * paintQuantity;
    let totalPaintQuantity = painQuantity + additionalPaintQuantity;
     
    let totalNaylonQuantity = naylonQuantity + 2;
     
    let naylonPrice = totalNaylonQuantity * 1.50;
    let painPrice = totalPainQuantity * 14.50;
    let thinnerPrice = thinnerQuantity * 5.00;
     
    let totalMaterialPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;
     
    let workPricePerHour = 0.30 * totalMaterialPrice;
    let totalWorkPrice = workTime * workPricePerHour;
     
    let totalPrice = totalMaterialPrice + totalWorkPrice;
    console.log(totalPrice);
    }
repainting(["10 ",
    "11 ",
    "4 ",
    "8 "])
