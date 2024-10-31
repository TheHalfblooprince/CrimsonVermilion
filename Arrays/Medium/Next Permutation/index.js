// next_permutation : find next lexicographically greater permutation

// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

function nextPermutation(nums) {
  // to find the next permutation, we will use the optimal approch.
  // for the optimal approch, we will first find the breakpoint, that is the point where arr[i] > arr[i+1], from the right side of the Array.
  // lets find the breakpoint.
  // initially, we will take the variable index and initialize it with -1,
  let n = nums.length;
  let index = -1;

  // now lets find the breakpoint of the array, from the right.

  for (let i = n - 2; i >= 0; i--) {
    // find the breakpoint.
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  // also, what we sill also do is to check if there is no breakpoint. then we will return the array.
  if (index === -1) {
    // reverse the array and return it,
    nums.reverse();
    return nums;
  }

  // now that we have found the breakpoint.
  // now we will find the smallest number from the right side of the array, till the index.

  for (i = n - 1; i > index; i--) {
    // now find the number.
    if (nums[i] > nums[index]) {
      // when found, swap the number with the index,
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }

  // now we have the two numbers, our array will look somewhat like this,
  // [] = [2 3 | 5 4 1 0 0 ], "|" repersents breakpoint.
  // what we need to do now is to reverse the part of the array after the breakpoint.
  // after that the array will look like this [] = [2 3 | 0 0 1 4 5],
  // this will be our next permutation.

  nums.splice(index + 1, n - index - 1, ...nums.slice(index + 1).reverse());

  return nums;
}

const array = [2, 1, 5, 4, 3, 0, 0];
console.log("Next Permutation: ", nextPermutation(array));

console.log(`Time Complexity: O(3N), where N = size of the given array
Finding the break-point, finding the next greater element, and reversal at the end takes O(N) for each, where N is the number of elements in the input array. This sums up to 3*O(N) which is approximately O(3N).

Space Complexity: Since no extra storage is required. Thus, its space complexity is O(1).`);
