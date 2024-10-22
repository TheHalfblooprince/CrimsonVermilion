// Find the Union of 2 Sorted Arrays.

function BruteForceApproch(arr1, arr2) {
  // For the Union of two arrays, we can make a set which contains both the first array and the second Array.

  const set = new Set([...arr1, ...arr2]);

  return set;
}

const array1 = [1, 2, 3, 4, 5, 5, 6, 7];
const array2 = [8, 9, 10, 11, 10, 15, 35];

console.log("Brue Force Approch: ", BruteForceApproch(array1, array2));
console.log(`Time Complexity: O(n + m)
Space Complexity: O(n + m)`);
