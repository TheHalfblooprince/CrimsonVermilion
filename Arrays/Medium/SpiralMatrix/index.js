/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let n = matrix.length;
  let m = matrix[0].length;

  let top = 0;
  let left = 0;
  let right = m - 1;
  let bottom = n - 1;

  let ans = [];

  // apply the loops.

  while (top <= bottom && left <= right) {
    // first we will go from left-> right;
    // that is.
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }

    // now, after the first pass, we will increment the top for the next step.
    top++;

    // now. we will move from right->bottom, that is.

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }

    // decrement right by one.
    right--;
    // check if top is less than bottom and are not equal.
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      // decrement bottom by one.
      bottom--;
    }

    // now check if left is less than and equal to right;
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }

      left++;
    }
  }
  return ans;
};

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(array));
