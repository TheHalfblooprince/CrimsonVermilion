// Find the smallest and second smallest element in the Array.

const array = [1, 2, 9, 8, 8, 5];

function BruteForceApproch(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let secondSmallest = arr[1];
  let secondLargest = arr[arr.length - 2];
  console.log(" BruteFoce Approch Second smallest is " + secondSmallest);
  console.log(" BruteFoce Approch Second largest is " + secondLargest);
}

// In the Brute Force Approch, We Use the Sort function which takes O(NlogN).
// But the problem lies here, what if the array is like this [1,2,8,8,8,8], here according to our function, seocndLargest = arr[n-2] => which is also 8.
// Also if the array has duplicates like this [5,5,5,5,5,5]
BruteForceApproch(array);

function BetterApproch(array) {
  let Largest = -Infinity;
  let Smallest = Infinity;
  let SecondLargest = -Infinity;
  let SecondSmallest = Infinity;
  // first find largest
  for (i = 0; i < array.length; i++) {
    Smallest = Math.min(Smallest, array[i]);
    Largest = Math.max(Largest, array[i]);
  }
  // mow for an Element to be secondSmallest, it should follow following Rules.
  // 1) it should be less than second_Small
  // 2) And it should not be equal to Smallest
  // Same for Second Largest
  for (i = 0; i < array.length; i++) {
    if (array[i] < SecondSmallest && array[i] !== Smallest) {
      SecondSmallest = array[i];
    }
    if (array[i] > SecondLargest && array[i] !== Largest) {
      SecondLargest = array[i];
    }
  }

  console.log(" Better Approch: Second Smallest Element: " + SecondSmallest);

  console.log(" Better Approch: Second Largest Element: " + SecondLargest);
}

BetterApproch(array); // complexity O(N);

function OptimalApproch_SecondSmallest(array) {
  if (array.length < 2) {
    return -1;
  }
  let small = Infinity;
  let secondSmallest = Infinity;

  for (i = 0; i < array.length; i++) {
    if (array[i] < small) {
      secondSmallest = small;
      small = array[i];
    } else if (array[i] < secondSmallest && array[i] !== small) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest;
}

function OptimalApproch_SecondLargest(array) {
  if (array.length < 2) {
    return -1;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

let sS = OptimalApproch_SecondSmallest(array);
let sL = OptimalApproch_SecondLargest(array);

console.log(
  "The Optimal Solution, Second Largest and Second Smallest values are : " +
    sL +
    ", " +
    sS
);

//Time Complexity: O(N), Single-pass solution
