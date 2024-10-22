// Problem Statement: Given an array of N integers, left rotate the array by one place.
// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output:
//  2,3,4,5,1
// Explanation:

// Since all the elements in array will be shifted
// toward left by one so ‘2’ will now become the
// first index and and ‘1’ which was present at
// first index will be shifted at last.

// Example 2:
// Input:
//  N = 1, array[] = {3}
// Output:
//  3
// Explanation:
//  Here only element is present and so
// the element at first index will be shifted to
// last index which is also by the way the first index.

// Intuition:
// The rotated array has just a difference that its first element is present at the last index of the array. So if we can just store the element at the first index and then shift all the elements towards the left and at last put the stored element at the last index. We will get th rotated array.

// Approach:
// We can take another dummy array of the same length and then shift all elements in the array toward the left and then at the last element store the index of 0th index of the array and print it.

function BruteForceApproch(arr, n) {
  if (n < 1) {
    return arr;
  }
  const temp = new Array(n);
  // store the elements from 1st Index till the secondLast.
  for (j = 1; j <= n; j++) {
    temp[j - 1] = arr[j];
  }
  // after the loop has been completed, we have the last Index empty, so we will put the first element there.
  temp[n - 1] = arr[0];

  console.log("BruteForce Approch: ");
  for (i = 0; i < temp.length; i++) {
    console.log(temp[i] + " ");
  }
}

let n = 5;
const array = [1, 2, 3, 4, 5];
BruteForceApproch(array, n);

//Complexity Analysis
// Time Complexity: O(n), as we iterate through the array only once.
// Space Complexity: O(n) as we are using another array of size, same as the given array.

//Optimal Solution...
//Approch
// At first, we have to shift the array towards the left so, we store the value of the first index in a variable (let it be x).

// Then we iterate the array from the 0th index to the n-1th index(why n-1 i will explain it below)

// And then store the value present in the next index to the current index like this :

// arr[i] = arr[i+1]
// And to prevent its segmentation fault we will iterate it till n-1.

// At last, put the value of variable x in the last index of the array.

function OptimalSolution(arr, n) {
  if (n < 1) {
    return arr;
  }

  const temp = arr[0];

  for (i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[n - 1] = temp;

  console.log("Optimal Approch: ");

  for (i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
}

OptimalSolution(array, n);

// Complexity Analysis:
// Time Complexity: O(n), as we iterate through the array only once.

// Space Complexity: O(1) as no extra space is used
