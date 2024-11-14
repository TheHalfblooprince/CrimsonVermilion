// Unlike .map() which always returns an array,
//.reduce() can transform an array into any data type. This is useful for tasks such as creating totals.
// const total = menuItems.reduce((accumulator, menuItem) => { return accumulator + menuItem.price; }, 0);

const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
  
  const total = menuItems.reduce((accumulator, menuItem) => {
    console.log(`
      accumulator: ${accumulator},
      menu item price: ${menuItem.price}
    `);
    return accumulator + menuItem.price;  
  }, 0);
  console.log(total);