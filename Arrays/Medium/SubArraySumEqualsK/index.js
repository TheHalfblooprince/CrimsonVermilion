// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let n = nums.length;
  let map = new Map();
  let count = 0;
  let presum = 0;

  map.set(0, 1);

  for (let i = 0; i < n; i++) {
    presum += nums[i];
    let remove = presum - k;
    if (map.has(remove)) {
      count += map.get(remove);
    }

    map.set(presum, (map.get(presum) || 0) + 1);
  }

  return count;
};

// Time Complexity: O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
// Space Complexity: O(N) as we are using a map data structure.
