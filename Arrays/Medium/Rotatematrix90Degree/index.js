// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Note: Rotate matrix 90 degrees anticlockwise

// Approach Brute-Force: Take another dummy matrix of n*n, and then take the first row of the matrix and put it in the last column of the dummy matrix,
// take the second row of the matrix, and put it in the second last column of the matrix and so.
function RotateMatrix(matrix) {
  let n = matrix.length;

  const ans = Array.from({ length: n }, () => Array(n).fill(0));

  // this creates an array of nxn and fills it with 0,

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - i - 1] = matrix[i][j];
    }
  }

  return ans;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(
  "----------------------------- Brute Force Solution ------------------------------------"
);
const rotated = RotateMatrix(array);
console.log(rotated);
console.log(`Time Complexity: O(N^2) to linearly iterate and put it into some other matrix.

Space Complexity: O(N^2) to copy it into some other matrix.`);

console.log(
  "------------------------- Optimal Solution ---------------------------------"
);

// Intuition: By observation, we see that the first column of the original matrix is the reverse of the first row of the rotated matrix,
// so that’s why we transpose the matrix and then reverse each row, and since we are making changes in the matrix itself space complexity gets reduced to O(1).

// Approach:

// Step 1: Transpose the matrix. (transposing means changing columns to rows and rows to columns)

// Step 2: Reverse each row of the matrix.

var rotate = function (matrix) {
  let n = matrix.length;

  // two steps.
  // 1) Transpose of the matrix from i -> 0 till n -1.
  // 2) Reverse each row of the matrix.

  // transpose

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse each row of the array.
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
};

console.log(rotate(array));
console.log(`Time Complexity: O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.

Space Complexity: O(1).`);
