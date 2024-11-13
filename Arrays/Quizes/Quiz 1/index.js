//Problem 1,  Move Zeros to the End.
//Problem 2, Left Rotate and Array by 1 place.

//Solution Problem 01:

const array = [1, 2, 0, 3, 5, 0, 9, 0, 0, 10, 15, 6, 9, 0];
const N = 14;
function BruteForceSolution(array, n) {
  // to move zeros to the end, the most naive approch is as follows.
  // take a temp array,
  // store all the non-zero elements in that array.
  // copy those elements from temp to the original array in first n places.
  // fill the remaining array with 0's.

  let temp = [];
  for (let i = 0; i < n; i++) {
    // store the non-zero elements in the temp.
    if (array[i] !== 0) {
      temp.push(array[i]);
    }
  }
  // now temp will hold the non-0 numbers.
  console.log("Temp[] : ", temp);

  // Now consider a variable k that is length of temp.
  let k = temp.length;
  // copy temp elements back into the array.

  for (let i = 0; i < k; i++) {
    array[i] = temp[i];
  }
  // Now start from k, and go till end, and fill all the elements with zeros.
  for (i = k; i < N; i++) {
    array[i] = 0;
  }
  return array;
}
// Time Complexity: 0(2N);
console.log("Final Array: ", BruteForceSolution(array, N));

function OptimalApproch(array, N) {
  // for an optimal soltion, we will use the two pointer method.
  // We will have two pointes, i and j,
  // pointer j will point to the first 0 in the array and pointer i will point to the element next to it.
  // then we will check if (arr[i]!==0), and swap the elements,

  // first find the first 0 in the array.
  let j = -1;
  for (let i = 0; i < N; i++) {
    if (array[i] == 0) {
      j = i;
      break;
    }
  }
  // Now we will have the first Zero.
  // now i will point to the next index after j, that is i= j+1;
  // now then we will check if i is zero or not, if not then swap the 0 and i.

  for (let i = j + 1; i < N; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      // after swapping increment j, so that j points to the zero.
      j++;
    }
  }

  // now we will have an array with 0's at the end.
  return array;
}

// Time Complexity: O(N) since a single traversal is happening.
// Space: O(1) linear time.

console.log("Optimal Approch, array[] = ", OptimalApproch(array, N));

// Problem2 left Rotate an Array by 1.
// for the naive soltion, we know that the element at the first index will be at last index.
// to do that, we can simply take the use of temp array.

function LeftRotateAnArrayBy1(array, N) {
  // take a temp array equal to the size of the Array.

  let temp = new Array(N);

  // loop from i = 1 to n, keeping the last index empty.
  for (let i = 1; i < n; i++) {
    temp[i - 1] = array[i];
  }

  console.log("Temp Array: temp[]: ", temp);

  temp[n - 1] = array[0];

  return temp;
}

function LeftRotateOptimalSolution(array, n) {
  // how can we do it in a single pass?
  // we can store the first element in the temp variable.
  // then we will loop from 0 to n-1 and shift the elements to the left.

  let temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1]; // i.e at oth index of the array, we want the 2nd element.
  }

  array[n - 1] = temp;

  return array;
}

console.log("-----------Problem 02---------------");
let arr = [1, 2, 3, 4, 5, 6];
let n = 6;
console.log(
  "Left Rotate Simple Solution: arr[]: ",
  LeftRotateAnArrayBy1(arr, n)
);

console.log(
  "Left Rotate Optimal Solution: arr[]: ",
  LeftRotateOptimalSolution(arr, n)
);
