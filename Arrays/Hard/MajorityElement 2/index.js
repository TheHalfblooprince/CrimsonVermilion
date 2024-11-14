// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

const case1 = [3, 2, 3];
const case2 = [1];
const case3 = [1, 2];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var BruteForceApproch = function (nums) {
  let n = nums.length;

  let list = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }

    if (count > Math.floor(n / 3)) {
      if (list.includes(nums[i])) {
        continue;
      } else list.push(nums[i]);
    }
  }

  return list;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementBetterSolution = function (nums) {
  let n = nums.length;
  const map = new Map();
  const mini = Math.floor(n / 3) + 1;
  const list = [];

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else map.set(nums[i], 1);

    if (map.get(nums[i]) == mini) {
      list.push(nums[i]);
    }
    if (list.length == 2) {
      break;
    }
  }
  return list;
};

console.log("Better Solution: case 1: ", majorityElementBetterSolution(case1));
console.log("Better Solution: case 2: ", majorityElementBetterSolution(case2));
console.log("Better Solution: case 3:", majorityElementBetterSolution(case3));

console.log(`Time Complexity: O(N*logN), where N = size of the given array.
  Reason: We are using a map data structure. Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN).
  If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).
  
  Space Complexity: O(N) as we are using a map data structure. We are also using a list that stores a maximum of 2 elements. That space used is so small that it can be considered constant.`);

console.log(
  "---------------------------------------------------------------------------------------------"
);

console.log("Brute Force Approch: case 1:  ", BruteForceApproch(case1));
console.log("Brute Force Approch: case 2: ", BruteForceApproch(case2));
console.log("Brute Force Approch: case 3: ", BruteForceApproch(case3));

console.log("Time Complexity: O(N^2), Space (N)");

console.log(
  "---------------------------------------------------------------------------------------------"
);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementOptimal = function (nums) {
  let count1 = 0,
    count2 = 0;
  let el1, el2;

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (count1 == 0 && el2 !== nums[i]) {
      count1 = 1;
      el1 = nums[i];
    } else if (count2 == 0 && el1 !== nums[i]) {
      count2 = 1;
      el2 = nums[i];
    } else if (nums[i] === el1) {
      count1++;
    } else if (nums[i] == el2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  let list = [];
  let count_el1 = 0,
    count_el2 = 0;
  let mini = Math.floor(n / 3) + 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el1) {
      count_el1++;
    } else if (nums[i] === el2) {
      count_el2++;
    }
  }

  if (count_el1 >= mini) {
    list.push(el1);
  }

  if (count_el2 >= mini) {
    list.push(el2);
  }

  return list;
};

console.log("Optimal Solution: case 1: ", majorityElementOptimal(case1));
console.log("Optimal Solution: case 2: ", majorityElementOptimal(case2));
console.log("Optimal Solution: case 3:", majorityElementOptimal(case3));
console.log(
  "---------------------------------------------------------------------------------------------"
);
console.log(`Time Complexity: O(N) + O(N), where N = size of the given array.
Reason: The first O(N) is to calculate the counts and find the expected majority elements. The second one is to check if the calculated elements are the majority ones or not.

Space Complexity: O(1) as we are only using a list that stores a maximum of 2 elements. The space used is so small that it can be considered constant.`);
