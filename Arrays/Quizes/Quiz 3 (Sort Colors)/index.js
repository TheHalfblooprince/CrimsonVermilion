// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
//with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

function BruteForceApproch(nums, n) {
  let x = 0;
  let y = 0;
  let z = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      x++;
    } else if (nums[i] === 1) {
      y++;
    } else z++;
  }

  console.log("Count 0: ", x, "Count 1: ", y, "Count 2 : ", z);

  // Fill the nums array based on counts
  for (let i = 0; i < x; i++) {
    nums[i] = 0;
  }
  for (let i = x; i < x + y; i++) {
    nums[i] = 1;
  }
  for (let i = x + y; i < x + y + z; i++) {
    nums[i] = 2;
  }

  return nums;
}
const nums = [2, 0, 2, 1, 1, 0];
const n = 6;
let result = BruteForceApproch(nums, n);
console.log("Brute Force Approch");
console.log(result);

function DutchNationalFlagAlgoritm(nums) {
  // Three Rules.
  // Everythinng from 0 to low-1 will be 0.
  // Everything from low to mid-1 will be 1
  // Everything from high+1 to n - 1 will be 2.
  // which means that everything from mid to high will be unsorrted, right?
  // so we can say that our array in the first place can be listed as mid->high, beause it is unsorted.

  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap it with low,
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // do nothing, just move the mid to one point ahead.
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

console.log("Optimal Approch:");
result = DutchNationalFlagAlgoritm(nums, n);
console.log(result);
