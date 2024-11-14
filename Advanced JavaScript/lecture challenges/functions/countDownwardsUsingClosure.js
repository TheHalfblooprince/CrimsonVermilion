// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step.

// Start
function countdown() {
    // write your code here
    let number = 10;
   return function startCountDown(){
       return number -=1 
    }
  }
  
  const countingDown = countdown();
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  
  function countdown(num,jump) {
    // write your code here
   return function startCountDown(){
       return num -=jump; 
    }
  }
  
  // Second CountDown
  const countingDown = countdown(20,5);
  
  console.log(countingDown(20,5));
  console.log(countingDown(20,5));
  console.log(countingDown(20,5));
  console.log(countingDown(20,5));
  