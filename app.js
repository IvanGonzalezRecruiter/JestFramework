// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar * 106.58;
       return valueInYen;
}

const fromYentoPound = function(valueInYen){
    
    let valueInPound = valueInYen * 0.0063;
       return valueInPound;
}
module.exports = { fromEuroToDollar , fromDollarToYen , fromYentoPound }
