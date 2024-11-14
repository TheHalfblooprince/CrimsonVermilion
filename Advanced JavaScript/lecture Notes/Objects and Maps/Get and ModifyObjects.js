const colors = {
    blue: "#f90" ,
    orange: "#f60",
    // add properties to object.
    "Purple Color" : `#ff879`,
    ["Dark Blue"]: `#f787`
  };
  
  colors.red = `#ff990`;
  console.log(colors["Purple Color"]);
  
  delete colors["Purple Color"]
  console.log(colors);

//   Values in an object can be changed or updated using the dot syntax:
//   colors.red = '#f00';
//   We can add properties to objects (as long as they are valid strings) by using quotes. This can include spaces:
//   'yellow Color': '#ff0',
//   The square brackets notation ([]) allows us to get values with spaces.
//   console.log(colors['yellow Color']);
//   We can also use the square brackets notation to dynamically add new key-value pairs to our object:
//   const colors = {
//     'yellow Color': '#ff0',
//     blue: "#f00",
//     orange: "#f60",
//     [color]: hexCode
//   };
//   The delete operator allows us to remove a property:
//   delete colors['yellow Color']


