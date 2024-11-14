// We can merge multiple arrays into a new array using the spread operator (...). The order in which the arrays are entered is retained:
// const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
// We can use .slice() to remove items.
// allMenuIdeas.slice(1, 3)
// .findIndex() allows us to find a particular element when we don't know where it is stored:
// allMenuIdeas.findIndex(idea => idea === 'Harvest Salad'
// We can use these in combination to update elements in the array:
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
]
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

console.log(finalMenuIdeas);
