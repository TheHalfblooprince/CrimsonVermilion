function markRows(mat, i, m) {
  for (let j = 0; j < m; j++) {
    if (mat[i][j] !== 0) {
      mat[i][j] = -1;
    }
  }
}

function markCols(mat, j, n) {
  for (let i = 0; i < n; i++) {
    if (mat[i][j] !== 0) {
      mat[i][j] = -1;
    }
  }
}

var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // find the zero's and replace them with -1.

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        markRows(matrix, i, rows);
        markCols(matrix, j, cols);
      }
    }
  }

  // now find the -1's and replace them with zeros.

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const array = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(
  "----------------------------------------Brute Force Solution-------------------------------------------------"
);

let finalMatrix = setZeroes(array);
console.log("The Final matrix is: ");
for (let i = 0; i < array.length; i++) {
  console.log(finalMatrix[i].join(" "));
}

console.log(`Time Complexity: O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: Firstly, we are traversing the matrix to find the cells with the value 0. It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1. This process takes O(N+M). So, combining this the whole process, finding and marking, takes O((N*M)*(N + M)).
Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

Space Complexity: O(1) as we are not using any extra space.`);

console.log(
  "-------------------------------------------Better Solution ---------------------------------------------------"
);
var setBetterZeroes = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1; // mark the index.
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] === 1 || col[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

finalMatrix = setBetterZeroes(array);
console.log("The Final matrix is: ");
for (let i = 0; i < array.length; i++) {
  console.log(finalMatrix[i].join(" "));
}

console.log(`Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: We are traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

Space Complexity: O(N) + O(M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: O(N) is for using the row array and O(M) is for using the col array.`);

console.log(
  "----------------------------------------- optimal Approch ---------------------------------------------"
);
var setZeroes = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let col0 = 1;
  // Step 1: Traverse the matrix and mark 1st row & col accordingly:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // Mark i-th row:
        matrix[i][0] = 0;

        // Mark j-th column:
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        // Check for col & row:
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Step 3: Finally mark the 1st col & then 1st row:
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

finalMatrix = setZeroes(array);
console.log("The Final matrix is: ");
for (let i = 0; i < array.length; i++) {
  console.log(finalMatrix[i].join(" "));
}

console.log(`Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: In this approach, we are also traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

Space Complexity: O(1) as we are not using any extra space.`);
