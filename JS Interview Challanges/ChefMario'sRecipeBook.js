/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]


function removeDupesFromArray(arr) {
    let NewRecipies = []
    for(let i = 0 ; i < arr.length;i++) { 
        if(NewRecipies.includes(arr[i])) { 
            console.log(`Ingredient ${arr[i]} has already been added to the List....`)
        }
        else {
            NewRecipies.push(arr[i])
        }   
    }
    return NewRecipies;
}

// BEHOLD TO ETERNAL GLORY........... SHORT WAY TO DO THIS.
function removeDupesFromArray(arr){
    return [...new Set(arr)];
}

console.log(removeDupesFromArray(eggScrambleRecipe));