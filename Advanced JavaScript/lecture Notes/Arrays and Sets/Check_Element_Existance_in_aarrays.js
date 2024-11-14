// .includes() tells us whether a certain element exists in an array:
// console.log(temperatures.includes(50));
// .some() checks whether one or more elements in an array meets a given condition:
// const result = temperatures.some(temperature => temperature.isRecordTemp); 
// .every() tells us whether a condition is true for all the elements in an array:
// const result = temperatures.every(temperature => !temperature.isRecordTemp);

const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

// includes, some, every
const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log(result);