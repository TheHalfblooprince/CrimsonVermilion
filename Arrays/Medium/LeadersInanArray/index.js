// Leaders in an Array

// Problem Statement: Given an array, print all the elements which are leaders.
// A Leader is an element that is greater than all of the elements on its right side in the array.

// Example 1:
// Input:

//  arr = [4, 7, 1, 0]
// Output
// :
//  7 1 0
// Explanation:

//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

// Example 2:
// Input:

//  arr = [10, 22, 12, 3, 0, 6]
// Output:

//  22 12 6
// Explanation:

//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.

var replaceElements = function (arr) {
  let ans = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader) {
      ans.push(arr[i]);
    }
  }

  return ans;
};
const case1 = [10, 22, 12, 3, 0, 6];
const case2 = [4, 7, 1, 0];
console.log(
  "---------------------------Brute Force Solution ----------------------------------"
);

console.log(`Time Compelxity: O(N^2)
Space Complexity: O(N)`);

console.log("The Leaders in the Array are: ", replaceElements(case1));
console.log("The Leaders in the Array are: ", replaceElements(case2));

console.log(
  "---------------------------Optimal Force Solution ----------------------------------"
);

// for the optimal approch, we can say that since we need to check the right most elements of the array,
// we can start from the right most side of the array.
// we will take two variables max and an array of ans.
// the variable max will hold the maxiumum element, the array will hold the leaders
// we will check if the right most element is a leader, that is if it is greater than current max.
// if it is, then we will push it into the leaders array.
// this method gives the leaders in the reverse direction, if we want them to be in the proper direction, we can reverse the array.

var replaceElementsOptimal = function (arr) {
  let leaders = [];
  let n = arr.length;

  let max = arr[n - 1];
  leaders.push(max);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.push(arr[i]);
      max = arr[i];
    }
  }

  return leaders;
};

console.log("The Leaders in the Array are: ", replaceElementsOptimal(case1));
console.log("The Leaders in the Array are: ", replaceElementsOptimal(case2));

console.log(`Time Compelxity: O(N)
Space Complexity: O(N)`);
