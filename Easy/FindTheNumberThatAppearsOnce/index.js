// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

// The Brute Force approch, uses a linear search to find the number that occures more than once maintaining two variables
// number and count. the number picks a single number at once and then uses another loop to check the frequencies.
// any word whose count has stayed 1, will be our single occuring element.
function BruteForceApproch(array, n) {
  for (let i = 0; i < n; i++) {
    let number = array[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (array[j] === number) {
        count++;
      }
    }

    if (count === 1) {
      return number;
    }
  }
}

// for Better approch, we will use the hash array method.
// First we will find the maximum element to know the size of the hash array.
// Then we will declare a hash array of size maxElement+1.
// Now we will use another loop we will store te elements of the array along with thier frequencies in the hasharray.
// i.e hashArray[array[i]++];
// Now after this step, we will use another loop which iterates over the hash array along with their to find the element
// with freqeuncy 1.
function BetterApproch(array, n) {
  let maxElement = 0;
  // find the maximum element
  for (let i = 0; i < N; i++) {
    maxElement = Math.max(maxElement, array[i]);
  }

  console.log("Max Element: ", maxElement);
  // now we have a max element, we will declare an array with the size of the max_Element.
  hashArray = new Array(maxElement + 1).fill(0);
  // Now that we have an hashArray. we will store the elements of the Array into the hashArray.

  console.log("Hash Array: ", hashArray);
  for (let i = 0; i < n; i++) {
    hashArray[array[i]]++;
  }

  console.log("Stored HashArray: ", hashArray);

  // Now we have stored the elements in the hash Array, we will find the element which is occuring only once.

  for (let i = 0; i < n; i++) {
    if (hashArray[i] === 1) {
      return hashArray[i];
    }
  }
}

// for the optimal approch, we will use what we have used before, xor method.
// we will xor all the elements with each-other, since the xor of two similar elements is 0.
// the only element with single occurence will be left unchanged.
// then we will return that element.
function OptimalApproch(array, n) {
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ array[i];
  }

  return xor;
}

const array = [1, 2, 3, 4, 5, 2, 3, 4, 5];
const N = 9;
console.log(
  "The BruteForceApproch, The Number which is occuring Once is: ",
  BruteForceApproch(array, N)
);
console.log(`Time Complexity: O(N2), where N = size of the given array.
Reason: For every element, we are performing a linear search to count its occurrence. The linear search takes O(N) time complexity. And there are N elements in the array. So, the total time complexity will be O(N2).

Space Complexity: O(1) as we are not using any extra space.`);

console.log(
  "The BetterApproch, The Number which is occuring Once is: ",
  BetterApproch(array, N)
);
console.log(`Time Complexity: O(N)+O(N)+O(N), where N = size of the array
Reason: One O(N) is for finding the maximum, the second one is to hash the elements and the third one is to search the single element in the array.

Space Complexity: O(maxElement+1) where maxElement = the maximum element of the array.`);
console.log(
  `The Optimal Approch, The Number which is occuring Once is:`,
  OptimalApproch(array, N)
);
console.log(`Time Complexity: O(N)
  Space Complexity: O(1)`);
