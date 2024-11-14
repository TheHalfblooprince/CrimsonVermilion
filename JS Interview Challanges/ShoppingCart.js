import shoppingCart from "./Shoppingdata.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

// Self Bonus Task. Return the total Prices of the items who's type is only sweet.

function total(arr){

    // reduce is a method that uses a callback function
    // and a default argument, the default arg can be 0 or null.
    // the callback function then comprises of two more components
    // an accumulator which is eqal to the default value and the current value
    // As the name suggests the current value tells us the current Index of the array.

    //------------------------BONUS TASK------------------------------------------------//      
    return arr
    .filter(product => product.type === "sweet")
    .reduce((acc,curr) => {
        return acc+curr.price
    },0)
    //------------------------BONUS TASK------------------------------------------------// 


   const totalPrice =  arr.reduce((acc,curr) => {
        return acc + curr.price
    }
    ,0)
   
 -
//     // Ans: 15.840000000000002
//     // to Round-off the totalPrice to the 2 decimal places.. we use
//     return totalPrice.toFixed(2)
}

console.log(total(shoppingCart));
