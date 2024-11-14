// Default function values enable us to save default values directly onto our function parameters. These are then used if the value is undefined in the function:
function convertTemperature(celsius, decimalPlaces = 1) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}
// More examples of default Parameters.

function multiply(a = 1 ,b = 1) {
    return a * b;
}

console.log(multiply(5)) // null
console.log(multiply()) // null
console.log(multiply(`a`,`b`)) //null
// afer providing default arguments.
console.log(multiply()) // 1
console.log(multiply(10)) //10
console.log(multiply(12,6)) // 72.

// default values help us provide clearity and avoid uncertainity to the code.