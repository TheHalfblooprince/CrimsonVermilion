// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

console.log(
  "-------------------- Brute Force Solution -----------------------"
);

// For a Naive Approch, what we can do is take two arrays.
// pos and neg
// the positive array will store the positive elements and the negative array will store the negative elements.
// then, we will do is see in terms of indexes, where do positive and negative elements lie in the answer array.
// positive values are at index: 2 * i.
// negative values are at index: 2 * i + 1.
// then we will loop and put these values at the required indexes in the original array and then return that array.

case1 = [3, 1, -2, -5, 2, -4];
case2 = [-1, 1];
var rearrangeArray = function (nums) {
  let n = nums.length;
  let pos = [];
  let neg = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i]);
    } else {
      pos.push(nums[i]);
    }
  }

  // put the values in the original array maintaing the order.

  for (let i = 0; i < n / 2; i++) {
    nums[2 * i] = pos[i];
    nums[2 * i + 1] = neg[i];
  }

  return nums;
};

console.log(rearrangeArray(case1));
console.log(rearrangeArray(case2));

console.log("--------------------Optimal Solution -----------------------");

var rearrangeArray = function (nums) {
  let n = nums.length;
  let positive = 0;
  let negative = 1;
  let ans = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      ans[negative] = nums[i];
      negative = negative + 2;
    } else {
      ans[positive] = nums[i];
      positive += 2;
    }
  }

  return ans;
};

console.log("Optimal Solution: ", rearrangeArray(case1));
console.log("Optimal Solution: ", rearrangeArray(case2));
