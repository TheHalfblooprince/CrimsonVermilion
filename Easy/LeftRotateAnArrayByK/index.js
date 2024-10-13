//Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// Approch
// 1) First we Will take the d elements and store them into the temp array
// 2) Then we Will start shifting the Array from dth index
// 3) After the array has been shifted, put back the temp Elements we extracted earlier into the array at places i-(n-d) starting from i = n-d;
// 4) You can also take as j = 0 and then place arr[i] = temp[j], and then increment the j as we go on.
// Note: No Matter how many times you are shifting an array, if the array is shifted to n times, where n=size of the array, it will come back to it's original form.

function BruteForceApproch(array, n, d) {
  // Number of Rotations
  d = d % n;
  // store the d elements into the temp array.
  let temp = [];
  for (i = 0; i < d; i++) {
    //Store into temp;
    temp[i] = array[i];
  }
  // after this, temp will Looks somewhat like this: temp = [first_d_Indexes_from_left];

  // Now to Start the shifting,
  for (i = d; i < n; i++) {
    array[i - d] = array[i];
  }
  // After shifting, the Array will look somewhat Like this:
  // Array = {4,5,6,7,_,_,_}

  // Now we will place the temp elements back into the original array.
  // Since we have the total size as n, and d as the places to shift, so we can say that the remaining index starts from i = n-d;
  for (i = n - d; i < n; i++) {
    array[i] = temp[i - (n - d)];
    // i.e arr[4] = temp[4-(7-3)]
  }

  // Now that we have the complete shifted Array, we will return the array.

  return array;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
let N = 7;
let D = 3;

console.log(BruteForceApproch(arr, N, D));
