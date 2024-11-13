// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

const arr = [2, 6, 5, 8, 11];
const tar = 14;

function BruteForceApproch(array, target) {
  let n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] + array[j] === target) {
        // return "Yes";
        // for 2nd Variant.
        return [i, j];
      }
    }
  }

  //   return "No";
  // for second variant.
  return [-1 - 1];
}

console.log("Brute Force Solution: ", BruteForceApproch(arr, tar));

function BetterApproch(array, target) {
  let map = new Map();

  let n = array.length;

  for (let i = 0; i < n; i++) {
    let el = array[i];

    let remaining = target - el;

    if (map.has(remaining)) {
      return "YES";
    }

    map.set(el, i);
  }

  return "NO";
}

console.log("Better Solution: ", BetterApproch(arr, tar));

function OptimalApproch(array, target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  let n = array.length;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return "Yes";
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return "NO";
}

console.log("Optimal Solution: ", OptimalApproch(arr, tar));
