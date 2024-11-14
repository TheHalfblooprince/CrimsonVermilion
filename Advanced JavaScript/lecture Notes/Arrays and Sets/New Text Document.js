// We can use array destrucuturing to take values out of an array and store them into variables:
// let [first, second] = finalMenuItems;
// We can also use destructuring to swap the values between two variables:
// const [second, first] = [first, second];
// After we have removed one value from an array, we can use the rest operator (...) to collect the others into a separate array:
// const [winner, ...losers] = finalMenuItems

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  const [winner, ...losers] = finalMenuItems;
  
  console.log({ winner, losers });
  let [first, second] = finalMenuItems;
  [second, first] = [first, second];
//   let first = finalMenuItems[0];
//   let second = finalMenuItems[1];
//   let third = finalMenuItems[2];
  
  console.log(first, second, third);