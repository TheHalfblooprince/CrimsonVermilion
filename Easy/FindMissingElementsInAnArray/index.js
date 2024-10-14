// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
// Find the number(between 1 to N), that is not present in the given array.
// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result:
//  3
// Explanation:
// In the given array, number 3 is missing. So, 3 is the answer.

// Example 2:
// Input Format:
//  N = 3, array[] = {1,3}
// Result:
//  2
// Explanation:
// In the given array, number 2 is missing. So, 2 is the answer.

// using an Boolean Hash array.
function BruteForceApproch(array, n) {
  const hashArray = new Array(n + 1).fill(false);
  // this will create an array that will look like this.
  // [false,false,false,false,....n-1];

  console.log(hashArray);

  // Now we wil Mark the presence of the elements in the boolean array.
  for (let i = 0; i < n - 1; i++) {
    hashArray[array[i]] = true;
  }

  console.log(hashArray);
  // Now the hash array will contain all the true elements except the missing Element.

  // to Find the missing element we will now again check to see the number marked as false.
  for (let i = 1; i <= n; i++) {
    if (!hashArray[i]) {
      // console.log(i, "Is Missing in the Original Array.");
      return i;
    }
  }

  return -1;
}

// Using the Sum formula.
// Note: The sum of the N natural numbers is Sn = n(n+1)/2.
function BetterApproch(array, n) {
  // here we have the value of n.
  // so we will find the Sum of N natural numbers.
  let Sn = n * ((n + 1) / 2);
  console.log("Sum of Total Elements Using Formula: ", Sn);
  // in our case it will be 15.

  // Now we will need to find the sum of the array.
  let Sa = 0;
  for (i = 0; i < n - 1; i++) {
    Sa += array[i];
  }
  console.log("Sum of Array Elements is: ", Sa);

  return Sn - Sa;
}

// Using XOR functions
// Note, Xor of any number to itself wil be zero.
// two different numbers make the xor appear 1.

function OptimalApproch(array, n) {
  // We will be needing two variables, xor1 & xor2.
  // xor1 will calculate the xor of all the numbers, including the missing number.
  // xor2 caluculates the xor of all the array elements.
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < n - 1; i++) {
    xor2 = xor2 ^ array[i]; // xor of array elements
    xor1 = xor1 ^ (i + 1); // xor of all elements.
  }

  xor1 = xor1 ^ n;

  return xor1 ^ xor2;
}

const array = [1, 2, 4, 5];
const N = 5;
let missingNumber = BruteForceApproch(array, N);
console.log(
  "----------------------------------------------------------------------------------------------------------------"
);

console.log(`Time Complexity: O(N) 
  Space Complexity: O(N)
  Complication: We are using an additional hashArray to mark the values as false. There Could be a better approch.
  `);
console.log("Brute Force Approch: The Missing number is: ", missingNumber);

missingNumber = BetterApproch(array, N);
console.log(
  "----------------------------------------------------------------------------------------------------------------"
);

console.log(
  `Better Approch Using Sum Formula, Missing Number is: `,
  missingNumber
);
console.log(
  `Time Complexity: O(N)
  Space Complexity: O(N)
  Complication: Overflow Problem, if the array has large number of elements such as 91222311123444323`
);
console.log(
  "----------------------------------------------------------------------------------------------------------------"
);

missingNumber = OptimalApproch(array, N);

console.log(`Optimal Approch with XOR, Missing Number is: `, missingNumber);
console.log(
  `Time Complexity: O(N)
  Space Complexity: O(N)
  Complication: No Complications.`
);
