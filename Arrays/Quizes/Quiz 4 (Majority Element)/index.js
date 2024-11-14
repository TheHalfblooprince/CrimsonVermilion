// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var BruteForce = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2));
    return nums[i];
  }

  return 0;
};

const case1 = [3, 2, 3];
const case2 = [2, 2, 1, 1, 1, 2, 2];

console.log(
  " (Brute Force) Majority Element Which Occurs more than N/2 Times is: ",
  BruteForce(case1)
);
console.log(
  " (Brute Force) Majority Element Which Occurs more than N/2 Times is: ",
  BruteForce(case2)
);

var BetterApproch = function (nums) {
  const map = new Map();
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let num = nums[i];

    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }

  // loop through map.

  for (const [num, count] of map) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }

  return 0;
};

console.log(
  " (Better Approch) Majority Element Which Occurs more than N/2 Times is: ",
  BetterApproch(case1)
);
console.log(
  " (Better Approch) Majority Element Which Occurs more than N/2 Times is: ",
  BetterApproch(case2)
);

var OptimalSolution = function (nums) {
  let count = 0;
  let el;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (count == 0) {
      // it means that no element is selected.
      count = 1;
      el = nums[i];
    } else if (nums[i] === el) {
      count++;
    } else count--;
  }

  let count0 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el) {
      count0++;
    }
    if (count0 > Math.floor(n / 2)) {
      return nums[i];
    }
  }

  return 0;
};

console.log(
  " (Optimal Approch Moore's Voting Algorithm) Majority Element Which Occurs more than N/2 Times is: ",
  OptimalSolution(case1)
);
console.log(
  " (Optimal Approch Moore's Voting Algorithm) Majority Element Which Occurs more than N/2 Times is: ",
  OptimalSolution(case2)
);
