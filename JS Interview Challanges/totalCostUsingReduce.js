import shoppingCart from "./Shoppingdata.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    return arr
    .reduce((accu,curr) => {

        if(curr.type === "savory"){ 
            return  accu+= curr.price 
        }
        else 
        return accu
        // return accu+curr.price
    },0)

}

console.log(`Total Price of the SavoruyItems is: ${totalSavory(shoppingCart)}`)

