// Find Duplicates in a Sorted Array.
// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

// Note: Return k after placing the final result in the first k slots of the array.

const array = [1, 1, 2, 2, 2, 3, 3];

function BruteForceApproch(array) {
  const set = new Set(array);
  let UniqueArr = Array.from(set);
  // for (i = 0; i < array.length; i++) {
  //   array[i] = UniqueArr[i];
  // }
  return UniqueArr;
}

let k = BruteForceApproch(array); //Time Complexity O(N);
console.log(" Brute Force Way, The Unique Elements in the Array are: ", k);

function twoPointerMethod(arr) {
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      // if j and i are not identical then do
      i++; //increment i with one position.
      arr[i] = arr[j]; // set the i to the value J was pointing to, and then Increment J in the loop.
    }
  }

  return i + 1; // i points to the last unique element and the total number of unique elements are i+1, beacuse indices start at 0.
}

k = twoPointerMethod(array); // Time Complexity O(N)
console.log("Two Pointer, The Unique Elements in the Array are: ", k);

for (j = 0; j < k; j++) {
  console.log(array[j]);
}
