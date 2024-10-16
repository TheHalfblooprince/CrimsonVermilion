// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

// For a Naive approch,
// what we can do is to generate all possible subaraays of the given array.
// for that we will take two pointers i and j and then we will set i to the first element and j also to the first element.
// now for that element, we will run a loop til i reaches the end of the array.
// again we will take another loop for j, that will run also till n;
// now we will take another array that will run from i to j, in that array we will increment the sum of the sub-arrays.
// and along that we will check that if the sum is equal to k, if it is equal, set the length variable using math.max to compare with previous length;

const array = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let target_sum = 3;
let size = 9;
function BruteForceApproch(array, n, target) {
  // first loop to trace the pointer i.

  let length = 0;
  for (let i = 0; i < n; i++) {
    // second loop to trace the pointer j
    for (let j = i; j < n; j++) {
      let maxSum = 0;
      // third loop to track i-j and sum it.
      for (let k = i; k <= j; k++) {
        maxSum += array[k];
      }
      if (maxSum === target) {
        length = Math.max(length, j - i + 1);
      }
    }
  }

  return length;
}
console.log(
  "Using Brute-Force method, the Longest Subarray with Sum k Is: ",
  BruteForceApproch(array, size, target_sum)
);
console.log(`Time Complexity: O(N^3) approx., where N = size of the array.
    Reason: We are using three nested loops, each running approximately N times.
    
    Space Complexity: O(1) as we are not using any extra space.`);

console.log("-------------------------------------------------------");

// Better Approch.
// For the better approch, what we can do is that we can omit the need for the third loop and make the time complexity boil down to O(N^2);
// For this just remove the inner loop of j, everything else is pretty much the same..

function BetterApproch(array, n, target) {
  // first loop to trace the pointer i.

  let length = 0;
  for (let i = 0; i < n; i++) {
    // second loop to trace the pointer j
    for (let j = i; j < n; j++) {
      let maxSum = 0;
      // Removed the Third loop, instead of that, we are directly checking i-j. since j has to run till the end also, as j is incremented, we are checking it
      maxSum += array[j];
      if (maxSum === target) {
        length = Math.max(length, j - i + 1);
      }
    }
  }

  return length;
}

console.log(
  "Using a Better Approch, The Longest SubArray with Sum K is: ",
  BetterApproch(array, size, target_sum)
);
console.log(`Using A Better Approch We have boiled down the time complexity of O(N^3) to O(N^2)
    Space Complexity is still the same that is O(1)`);

function BetterAppochWithHashMaps(a, k) {
  let n = a.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += a[i];

    // if the sum = k, update the maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x - k
    let rem = sum - k;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  return maxLen;
}
console.log("-------------------------------------------------------");
console.log("A Better Approch Using hash Maps: ");
console.log(
  "The Longest Sub-Array with sum K is: ",
  BetterAppochWithHashMaps(array, target_sum)
);
console.log(`Time Complexity:
 O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
Reason: For example, if we are using an unordered_map data structure the time complexity will be O(N)(though in the worst case,
unordered_map takes O(N) to find an element and the time complexity becomes O(N2)) but if we are using a map data structure,
the time complexity will be O(N*logN). The least complexity will be O(N) as we are using a loop to traverse the array.

Space Complexity: O(N) as we are using a map data structure.`);

console.log("-------------------------------------------------------");
function OptimalApproch(array, n, target) {
  let right = 0;
  left = 0;
  let sum = array[0];
  let maxlength = 0;

  while (right < n) {
    // if sum > k, reduce the subarray from left.
    // untill some becomes less than or equal to k.
    while (left <= right && sum > target) {
      sum -= array[left];
      left++;
    }
    // if sum = k, update the maxLen i.e. answer
    if (sum === target) {
      maxlength = Math.max(maxlength, right - left + 1);
    }
    // Move forward the right pointer
    right++;
    if (right < n) {
      sum += array[right];
    }
  }

  return maxlength;
}
console.log("Using The Optimal Approch");
console.log(
  "The Longest Sub-Array with Sum K is: ",
  OptimalApproch(array, size, target_sum)
);
console.log(`Time Complexity: O(2*N), where N = size of the given array.
Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index). Now, the inner while loop i.e. the left pointer can move up to the right pointer at most. So, every time the inner loop does not run for n times rather it can run for n times in total. So, the time complexity will be O(2*N) instead of O(N2).

Space Complexity: O(1) as we are not using any extra space.`);
