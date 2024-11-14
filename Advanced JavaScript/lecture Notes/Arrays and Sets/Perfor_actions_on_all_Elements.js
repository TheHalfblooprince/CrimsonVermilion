// .map allows us to transform each element of an array and create a new array:
// const newTemps = temperatures.map(temperature =>
// 	temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
// );

// .forEach() works in a similar way but does not create a new array, and instead applies a given action to an existing array.
// ewTemps.forEach(temperature => {
//    if (temperature.isHigh) {
//      console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
//    }
// })
// Methods can be chained:
// temperatures
//   .map(temperature => 
// temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
// )
//   .forEach(temperature => {
//    if (temperature.isHigh) {
//      console.log(`Temperature ${temperature.degrees} was a record high last week!`);  

const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  )
  newTemps.forEach(temperature => {
     if (temperature.isHigh) {
       console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
     }
  })
  // console.log(newTemps);