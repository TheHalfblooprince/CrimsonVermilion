// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

function BruteForceSolution(array) {
  function linearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  }

  let longest = 1;
  let n = array.length;

  if (array.length <= 0) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    let count = 0;
    let current = array[i];
    while (linearSearch(array, current + 1) === true) {
      count++;
      current++;
    }
    longest = Math.max(longest, count);
  }

  return longest;
}

const nums = [100, 4, 200, 1, 3, 2];
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums3 = [];

console.log(
  "------------------ Brute Force Solution --------------------------"
);
console.log(" Case 1: ", BruteForceSolution(nums));
console.log(" Case 2: ", BruteForceSolution(nums2));
console.log(" Case 3: ", BruteForceSolution(nums3));

console.log(`Time Complexity: O(N2), N = size of the given array.
Reason: We are using nested loops each running for approximately N times.

Space Complexity: O(1), as we are not using any extra space to solve this problem.`);

console.log("--------------------- Better Approch --------------------------");
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let longest = 1;
  let count = 0;
  let lastSmaller = -Infinity;
  if (nums.length < 1) {
    return (longest = 0);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 === lastSmaller) {
      count++;
      lastSmaller = nums[i];
    } else if (nums[i] !== lastSmaller) {
      // start a new Sequence.
      count = 1;
      lastSmaller = nums[i];
    }

    longest = Math.max(longest, count);
  }

  return longest;
};

console.log(" Case 1: ", longestConsecutive(nums));
console.log(" Case 2: ", longestConsecutive(nums2));
console.log(" Case 3: ", longestConsecutive(nums3));

console.log(`Time Complexity: O(NlogN) + O(N), N = size of the given array.
Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).

Space Complexity: O(1), as we are not using any extra space to solve this problem.`);

console.log("------------ Optimal Approch ----------------------");

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  let set = new Set();
  let longest = 1;
  // put values in the set.

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (element of set) {
    if (!set.has(element - 1)) {
      let count = 1;
      let x = element;
      while (set.has(x + 1)) {
        x = x + 1;
        count = count + 1;
      }
      longest = Math.max(count, longest);
    }
  }
  return longest;
};

console.log(`Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).

Space Complexity: O(N), as we are using the set data structure to solve this problem.

Note: The time complexity is computed under the assumption that we are using unordered_set and it is taking O(1) for the set operations. 

If we consider the worst case the set operations will take O(N) in that case and the total time complexity will be approximately O(N2). 
And if we use the set instead of unordered_set, the time complexity for the set operations will be O(logN) and the total time complexity will be O(NlogN).`);
