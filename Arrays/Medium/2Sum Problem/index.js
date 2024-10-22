// Two Sum : Check if a pair with given sum exists in Array

// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Examples:

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

// lets start with the most naive soltion that we can think of.
// to check if there exist two numbers such that their sum is equal to the target
// what we can do is that use two loops and take a single element i for say, and then
// compare that element to the all others in the array.
// along the way we will check that if two two elements sum to the target or not.
// if so then we will return "YES" or the indexes of both the variable.
// to avoid using same element twice, we will start the inner loop from j=i+1;
// Using this method, the Time complexity is O(N^2)
// Space complexity is in Constant Time that is O(1)
function twoSumBruteForce(array, n, target) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // check sum
      //   console.log(`Checking: arr[ ${[i]}] + arr[ ${[j]}]`);
      if (array[i] + array[j] == target) {
        return "YES";
        // for the second variant.
        // return [i,j];
      }
    }
    // for the second Variant
    // return [-1,-1];
  }
  return "NO";
}

const array = [2, 7, 11, 15];
const N = 4;
const tar = 9;
console.log("Brute Force or Naive Approch", twoSumBruteForce(array, N, tar));

// Now in the previous Solution we were using 2 for loops, One Approch we can do to minizime the time complexity is using hashMap.
// this will omit the need for second for loop
// What we will do is use a hash Map,
// we know that from arthmetic formulas that, somenumber + x = target.
// lets suppose this example, 8 + x = 14;
// we need to find x, so wer can say that x = target - 8;
// For the second variant, we will share the element along with its index in the hash map.

// Approch
// we will select the elements of the array one by one, lets say i.
// Then we will check if the other required element exists in the hashmap that is, in our case target-array[i]
// if it has, return "YES", for first variant and return [requiredElement,i];
// if it does not exists, add it to the hash map.
// if we are out of the loopie, return "NO" for first variant and [-1,-1] for second variant.
// time Complexity: O(N)
// Space Complexity: O(N);
function twoSumBetterApproch(array, n, target) {
  // create a hash map

  let map = new Map();

  for (let i = 0; i < N; i++) {
    let num = array[i];
    let moreNeeded = target - num;

    // check if the map has moreNeeded
    if (map.has(moreNeeded)) {
      return "YES";
      // for other variant
      // return [moreNeeded,i];
    }

    map.set(num, i);
  }

  return "NO";
  // for second variant.
  // return [-1,-1]
}

console.log("Better Approch", twoSumBetterApproch(array, N, tar));

// For Optimal Approch
// We can use the two Pointer method.
// first we will sort the array.
// what we can do is take two pointers, left and right.
// left will point to the first element of the array
// right will point to the last element of the array.
// as long as left and right do not intersect, we will do the following
// if the sum equals to the target, return "YES". or [left,right];
// check if the sum > target, if it is, then decrement the right pointer.
// if the sum < target, increment the left pointer.

function twoSumOptimalApproch(array, n, target) {
  // sort the array.

  array.sort((a, b) => a - b);
  // Now we have a sorted array.

  // intialize pointers left and right.

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      // for second variant.
      return [left, right];
    } else if (sum < target) {
      left++;
    } else right--;
  }
  return [-1, -1];
}

console.log("optimal Approch", twoSumOptimalApproch(array, N, tar));
