function maxLen(nums) {
  let map = new Map();
  let sum = 0;
  let max = 0;

  let n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (sum === 0) {
      max = i + 1;
    } else {
      if (map.has(sum)) {
        max = Math.max(max, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }

  return max;
}
const array = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];
const maxlength = maxLen(array);

console.log("Maximum Length of Subarray with Sum 0 : ", maxlength);
console.log("Time Complexity: O(NlogN)");
console.log("Space Ceomplexity: o(N)");
