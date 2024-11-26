// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const array = [-1, 0, 1, 2, -1, -4];

var BruteForce = function (nums) {
  // the most naive solution for this problem is to,
  // check for all the combinations by using for nested loops.
  // by that we can check if the elements add up to the sum of 0.

  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [[nums[i]], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  let answerSet = new Set(ans.map(JSON.stringify));
  ans = Array.from(answerSet).map(JSON.parse);

  return ans;
};

console.log("Brute Force Approch: ", BruteForce(array));

var BetterSolution = function (nums) {
  // what we can do is, we can optimize the O(N^3) to O(N^2)
  // Heres how our algorrithm will look like,

  // arr[i] + arr[j] + arr[k] = 0;
  // arr[k] = - (arr[i] + arr[j]);
  //        = - (-1 - 1 );
  //        = -(-2)
  //        = 2;
  // but how wil we find that2, yes
  // we will use the map Datastructure for this purpose.
  //    First, we will declare a set data structure as we want unique triplets.
  //    Then we will use the first loop(say i) that will run from 0 to n-1.
  //    Inside it, there will be the second loop(say j) that will run from i+1 to n-1.
  //    Before the second loop, we will declare another HashSet to store the array elements as we intend to search for the third element using this HashSet.
  //    Inside the second loop, we will calculate the value of the third element i.e. -(arr[i]+arr[j]).
  //    If the third element exists in the HashSet, we will sort these 3 values i.e. arr[i], arr[j], and the third element, and insert it in the set data structure declared in step 1.
  //    After that, we will insert the j-th element i.e. arr[j] in the HashSet as we only want to insert those array elements that are in between indices i and j.
  //    Finally, we will return a list of triplets stored in the set data structure.

  let ans = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    let hashset = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      let third = -(nums[i] + nums[j]);
      if (hashset.has(third)) {
        let temp = [nums[i], nums[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }

      hashset.set(nums[j]);
    }
  }

  let answerSet = new Set(ans.map(JSON.stringify));
  ans = Array.from(answerSet).map(JSON.parse);

  return ans;
};

console.log("Better Solution Using HashMap, ", BetterSolution(array));

var OptimalApproch = function (nums) {
  // In this approach, we intend to get rid of two things i.e. the HashSet we were using for the look-up operation and the set data structure used to store the unique triplets.

  // So, We will first sort the array. Then, we will fix a pointer i, and the rest 2 pointers j and k will be moving.

  // Now, we need to first understand what the HashSet and the set were doing to make our algorithm work without them. So, the set data structure was basically storing the unique triplets in sorted order and the HashSet was used to search for the third element.

  // That is why, we will first sort the entire array, and then to get the unique triplets, we will simply skip the duplicate numbers while moving the pointers.

  // How to skip duplicate numbers:
  // As the entire array is sorted, the duplicate numbers will be in consecutive places. So, while moving a pointer, we will check the current element and the adjacent element. Until they become different, we will move the pointer by 1 place. We will follow this process for all 3 pointers. Thus, we can easily skip the duplicate elements while moving the pointers.

  // Now, we can also remove the HashSet as we have two moving pointers i.e. j and k that will find the appropriate value of arr[j] and arr[k]. So, we do not need that HashSet anymore for the look-up operations.

  //     The steps are as follows:

  // First, we will sort the entire array.
  // We will use a loop(say i) that will run from 0 to n-1. This i will represent the fixed pointer. In each iteration, this value will be fixed for all different values of the rest of the 2 pointers. Inside the loop, we will first check if the current and the previous element is the same and if it is we will do nothing and continue to the next value of i.
  // After that, there will be 2 moving pointers i.e. j(starts from i+1) and k(starts from the last index). The pointer j will move forward and the pointer k will move backward until they cross each other while the value of i will be fixed.
  // Now we will check the sum i.e. arr[i]+arr[j]+arr[k].
  // If the sum is greater, then we need lesser elements and so we will decrease the value of k(i.e. k--).
  // If the sum is lesser than the target, we need a bigger value and so we will increase the value of j (i.e. j++).
  // If the sum is equal to the target, we will simply insert the triplet i.e. arr[i], arr[j], arr[k] into our answer and move the pointers j and k skipping the duplicate elements(i.e. by checking the adjacent elements while moving the pointers).
  // Finally, we will have a list of unique triplets.

  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // remove duplicates
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;
        // skip the duplicates.
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return ans;
};

console.log("Optimal Approch: ", OptimalApproch(array));
