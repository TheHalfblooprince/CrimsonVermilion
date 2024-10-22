// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Examples:
// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1}

// Output: 2

// Explanation: There are two consecutive 1's in the array.

function CountMax1s(array, n) {
  let maxCouunt = 0;
  let Count = 0;

  // Now we will lopp through the array and check if the next element is 1 or not.
  for (let i = 0; i < n; i++) {
    if (array[i + 1] === 1) {
      Count++;
      if (Count > maxCouunt) {
        maxCouunt = Count;
      }
    } else {
      Count = 0;
    }
  }

  return maxCouunt;
}

const array = [1, 0, 1, 1, 0, 1];
const N = 7;
max1s = CountMax1s(array, N);
console.log("The Maximum Number of Consecutive 1's are: ", max1s);
// Time Complexity O(N)
// Space Complexity 0(1)
