// Sort an array of 0s, 1s and 2s
// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

// Examples
// Input:
//  nums = [2,0,2,1,1,0]
// Output
// : [0,0,1,1,2,2]

// Input:
//  nums = [2,0,1]
// Output:
//  [0,1,2]

// Input:
//  nums = [0]
// Output:
//  [0]

function sortArray(nums) {
  // to sort the array of 0's 1's and 2's the most naive solution is to use a sort method to do so.

  nums.sort((a, b) => a - b);

  return nums;
}

let array = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log("Brute Force Solution: ", sortArray(array));
console.log(`Time Complexity: O(Nlogn)
Space Complexity: O(1)
  `);

//we can reduce the time complexity to O(N) using a Better Approch, that is
// using three variables and counting the frequency of each element.
// then using a loopie/s, we will add these frequncies to the array in a sorted manner.

function sortArrayBetterApproch(nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  // count the occurence of each of the element 0,1 and 2.

  for (i in nums) {
    if (nums[i] == 0) {
      count0++;
    } else if (nums[i] == 1) {
      count1++;
    } else {
      count2++;
    }
  }

  // now we have the occurences of each of the three elements.
  //first we will add the 0's into the array.
  for (let i = 0; i < count1; i++) {
    nums[i] = 0;
  }

  for (let i = count0 + 1; i < count2; i++) {
    nums[i] = 1;
  }

  for (let i = count0 + count1; i < nums.length; i++) {
    nums[i] = 2;
  }

  console.log(nums);

  return nums;
}

console.log("----------------- Better Approch--------------");
sortArrayBetterApproch(array);
console.log(`Time Complexity: Time taken to Count 0's 1's and 2's = O(N)
Other three for Loops: O(N)
O(N) + O(N) = O(2N);
Space Complexity: O(1)
`);

console.log("---------------- Optimal Approch ----------------");

// for optimal approch we can use an alogritm which goes by the name of Dutch National Flag Algorithm.
// In this Algorithm we have three pointers,
// 1) low
// 2) mid
// 3) high.

// the Algorithm revolves around three rules.
// 1) Everything From [0....... low-1 ] is 0.
// 2) Everything from [low.....mid-1] is  1.
// 3) Everything From [high......n-1] is 2.
// In between, we will have unsorted elements from [mid.....high];

function sortArrayOptimalApproch(nums) {
  // take three pointers.
  let low = 0;
  let high = nums - 1;
  let mid = 0;

  while (mid <= high) {
    if (nums[mid] === 0) {
      //swap with low
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // swap with high
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }

  return nums;
}

console.log(sortArrayOptimalApproch(array));
console.log(`Time Complexity: O(N)
Space Complexity O(1)`);
