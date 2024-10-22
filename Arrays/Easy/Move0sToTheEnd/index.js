//Problem Statement: You are given an array of integers,
// your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Intution:
// Take an empty array temp = [];
// Store all non-Zero elements from the original array into the temp array.
// Copy those elements from temp to the original array, store them in first n feilds of the original array.
// Fill the rest of the remaining original array with 0's

function BruteForceApproch(arr, n) {
  let temp = [];

  // Copy the All Non_Zero elements from the original array into the temp array.

  for (i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  // the temp will look like this: temp = {1,2,3,4,5};

  // Now We will Copy the temp elements into the first d feilds of the originl array.
  let d = temp.length;

  for (i = 0; i < d; i++) {
    arr[i] = temp[i];
  }

  // The original Array will now contain the positive numbers mainting the order.
  // Now append the remaining positions as 0 in the original array.

  for (i = d; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

const array = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let N = 10;
console.log(
  "After Moving the Zero's to the end Using Brute force way: ",
  BruteForceApproch(array, N)
);

console.log(`Brute Foce Time Complexity: O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements,
X = no. of non-zero elements, and N-X = total no. of zeros.
Reason: O(N) for copying non-zero elements from the original to the temporary array. O(X) for again copying it back from the temporary to the original array. O(N-X) for filling zeros in the original array. So, the total time complexity will be O(2*N).

Space Complexity: O(N), as we are using a temporary array to solve this problem and the maximum size of the array can be N in the worst case.
Reason: The temporary array stores the non-zero elements. In the worst case, all the given array elements will be non-zero.`);

// 2 pointer method..
// pointer j will point to the first 0 in the array, and pointer i will point to the next index of pointer j, i.e i = j + 1;
// we will check if arr[i]!=0, while doing that. we will swap i and j.
// Now the j will be pointing to the non-zero element a[i], so we will increment j by 1 so that It can again point to the first zero.
// Finally the array will be set in a right Manner.
function OptimalApproch(arr, n) {
  let j = -1;

  // find the first zero.

  for (i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  // in Case of non zero elements.
  if (j === -1) {
    return arr;
  }

  for (i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
console.log(
  "---------------------------------------------------------------------------------------------------------------"
);
console.log("Using Optimal Approch.", OptimalApproch(array, N));
console.log(`Time Complexity: O(N), N = size of the array.
Reason: We have used 2 loops and using those loops, we are basically traversing the array once.

Space Complexity: O(1) as we are not using any extra space to solve this problem.`);
