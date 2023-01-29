function suppliesForSchool(input){
 
    let packetPen =Number(input[0]);
    let packetMarkers = Number(input[1]);
    let littersOfPreparationForClean = Number(input[2]);
    let percentDiscount = Number(input[3]) / 100;
 
    let priceForPacketPen = 5.80;
    let priceForMarkers = 7.20;
    let priceForPrepration =  1.20;
 
    let totalPriceForPen = packetPen * priceForPacketPen;
    let totalPriceForMarkers = packetMarkers * priceForMarkers;
    let totalPriceForPreparation = littersOfPreparationForClean * priceForPrepration;
 
    let totalPriceForAll = totalPriceForPen + totalPriceForMarkers + totalPriceForPreparation;
 
    let totalPriceWithDis = totalPriceForAll - (totalPriceForAll * percentDiscount) ;
    
    console.log(totalPriceWithDis);
 
}
suppliesForSchool(["2","3","4","25"])