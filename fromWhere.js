function fromWhere(registration){
    switch(registration) {
        case "CY":
            return "Bellville";
        case "CJ":
            return "Paarl";
        case "CA":
            return "Cape Town";
       
        default:
            return "Some other place!";
    }

}
fromWhere('CY')
module.exports = fromWhere