

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Yen should be 106.58 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    const expected = 3.5*106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.03); 
})
test("One Yen should be 0.0063 pounds", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYentoPound(3.5)

    const expected = 3.5*0.0063; 
    
    // this is the comparison for the unit test
     expect(fromYentoPound(3.5)).toBe(0.02205); 
})
//coded by IvánG for 4geeks Academy