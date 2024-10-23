const array = [3, 2, 3];
const array2 = [2, 2, 1, 1, 1, 2, 2];

function BruteFoceSolution(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > n / 2) {
      return nums[i];
    }
  }
  return -1;
}

console.log("---------------  Brute Force Solution --------------------------");
console.log(BruteFoceSolution(array));
console.log(BruteFoceSolution(array2));
console.log(`Time Complexity: O(N2), where N = size of the given array. 

Reason: For every element of the array the inner loop runs for N times. 

And there are N elements in the array. So, the total time complexity is O(N2). 

Space Complexity: O(1) as we use no extra space.`);

function MajorityElementBetterSolution(nums) {
  const map = new Map();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let number = nums[i];
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  //check the occurence of elements in map.
  for (const [number, count] of map) {
    if (count > Math.floor(n / 2)) {
      return number;
    }
  }

  return -1;
}

console.log("---------------  Better Solution --------------------------");
console.log(MajorityElementBetterSolution(array));
console.log(MajorityElementBetterSolution(array2));
console.log(`Time Complexity: O(N*logN) + O(N), where N = size of the given array.

Reason: We are using a map data structure. Insertion in the map takes logN time.

And we are doing it for N elements. So, it results in the first term O(N*logN).

The second O(N) is for checking which element occurs more than floor(N/2) times.

If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).
Space Complexity: O(N) as we are using a map data structure.
`);

function MajorityElementOptimalSolution(nums) {
  let count = 0;
  let el;
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      count = 1;
      el = nums[i];
    }
    // if the current element is equal to the majority element
    else if (el === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = 0;
  // check the occurence of the element in the nums.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === el) {
      count1++;
    }
  }
  // check if count is greater than N/2.
  if (count1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
}

console.log("---------------Optimal Solution --------------------------");
console.log(MajorityElementOptimalSolution(array));
console.log(MajorityElementOptimalSolution(array2));
console.log(`Time Complexity: O(N) + O(N), where N = size of the given array.
Reason: The first O(N) is to calculate the count and find the expected majority element. 
The second one is to check if the expected element is the majority one or not.

Note: If the question states that the array must contain a majority element, in that case, we do not need the second check. Then the time complexity will boil down to O(N).

Space Complexity: O(1) as we are not using any extra space.`);
