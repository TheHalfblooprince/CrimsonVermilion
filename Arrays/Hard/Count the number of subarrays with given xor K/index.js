// Count the number of subarrays with given xor K
// Problem Statement: Given an array of integers A and an integer B.
//  Find the total number of subarrays having bitwise XOR of all elements equal to k.

// Example 1:
// Input Format:
//  A = [4, 2, 2, 6, 4] , k = 6
// Result:
//  4
// Explanation:
//  The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

// Example 2:
// Input Format:
//  A = [5, 6, 7, 8, 9], k = 5
// Result:
//  2
// Explanation:
//  The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

function BruteForceApproch(nums, k) {
  // the most basic solution is to generate all possible sub-arrays.
  let n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let xor = 0;
      for (let k = i; k <= j; k++) {
        xor = xor ^ nums[k];
      }
      if (xor === k) {
        result++;
      }
    }
  }

  return result;
}

function BetterApproch(nums, k) {
  // we can boil down the O(N^3) complexity down to O(N^2).

  let n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor = xor ^ nums[j];
      if (xor === k) {
        result++;
      }
    }
  }

  return result;
}

function MaxSubArraysWithSumK(nums, k) {
  let n = nums.length;
  let result = 0;
  let prefXor = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    //calculate the prefixXor

    prefXor = prefXor ^ nums[i];

    // If prefXOR ^ k exists in mp then there is a subarray
    // ending at i with XOR equal to k
    result += map.get(prefXor ^ k) || 0;

    if (prefXor === k) {
      result++;
    }

    map.set(prefXor, (map.get(prefXor) || 0) + 1);
  }

  return result;
}

const testCase1 = [4, 2, 2, 6, 4];
const testCase2 = [5, 6, 7, 8, 9];

console.log(
  "Optimal Approch Test Case 01 ",
  MaxSubArraysWithSumK(testCase1, 6)
);

console.log("Optimal Approch Test Case 02", MaxSubArraysWithSumK(testCase2, 6));

console.log(
  "Brute Force Approch Test case 01",
  BruteForceApproch(testCase1, 6)
);
console.log(
  "Brute Force Approch Test case 02",
  BruteForceApproch(testCase2, 5)
);

console.log("Better Approch", BetterApproch(testCase1, 6));
console.log("Better Approch", BetterApproch(testCase2, 5));
