// Check if the Array is Sorted.

//Normal Solution Or Brute Force Solution.
// 1) Traverse ther whole Array, if the current element is smaller than or equal to all the array elements, then the array is Sorted
// 2) We Will use Two loops, one for the current element and one for comparing it to the every element in the Array.
// 3) Time Complexity: Since we are using two loops, O(N^2);

const array = [1, 2, 3, 4, 5];

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        return false;
      }
    }
  }
  return true;
}

let arr = isSorted(array);
if (arr) console.log(true);
else console.log(false);

// Optimal Solution.
// 1) As we know that for a sorted array, the previous of every element must be equal or smaller than the current element.
// 2) If this condition is true for two elements, we say that the two elements are sorted
// 3) If this condition is true fo an array, then the array is sorted.

function isOptimal(array) {
  for (let i = 1; i < array.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

arr = isOptimal(array);
console.log(isOptimal(arr) ? "True" : "False");
// Time Complexity: Since we are using two loops, O(N);
