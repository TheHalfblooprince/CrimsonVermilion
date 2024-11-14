const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  const [winner, ...losers] = finalMenuItems;
  
  console.log({ winner, losers });  
  
  const billionares = [
    `Wasi Ul Haq`,
    `Bernard Arnould`,
    `Elon Musk`
  ]
  
  const [theChosenOne,...booo] = billionares
  console.log({theChosenOne,booo})
  // let [first, second] = finalMenuItems;
  // [second, first] = [first, second];
  // let first = finalMenuItems[0];
  // let second = finalMenuItems[1];
  // let third = finalMenuItems[2];
  
  // console.log(first, second, third);