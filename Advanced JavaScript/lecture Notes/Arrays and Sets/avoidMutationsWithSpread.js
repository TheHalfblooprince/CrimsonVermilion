// The .push() method mutates the original array. We can fix this by using a non-mutating array method such as.concat().
// const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');
// Alternatively, we can use the array spread operator (...) to clone the previous array.
// const allMenuIdeas = [...lunchMenuIdeas];

const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
const newArray = [...lunchMenuIdeas];
newArray.push(`Palmesian Salad`);
//OR we can also use.
const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

console.log(allMenuIdeas)
console.log(lunchMenuIdeas);
console.log(newArray)