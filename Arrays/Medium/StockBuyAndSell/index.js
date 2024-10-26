// Stock Buy And Sell

// 266

// 4
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Brute Force Solution:
// intuition: We can simply use 2 loops and track every transaction and maintain a variable maxPro to contain the max value among all transactions.

// Approach:

// Use a for loop of ‘i’ from 0 to n.
// Use another for loop of j from ‘i+1’ to n.
// If arr[j] > arr[i] , take the difference and compare  and store it in the maxPro variable.
// Return maxPro.

console.log(
  "----------------------- Brute Force Solution -------------------------------"
);

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

var maxProfit = function (prices) {
  let maxPro = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        maxPro = Math.max(prices[j] - prices[i], maxPro);
      }
    }
  }
  return maxPro;
};

console.log("Maximum Profit: ", maxProfit(prices1));

console.log("Maximum Profit: ", maxProfit(prices2));

console.log(`Time Complexity: O(N^2)
Space Complexity: O(1)`);

console.log(
  "----------------------- Optimal Solution -------------------------------"
);

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitOptimal = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

console.log("Maximum Profit: ", maxProfitOptimal(prices1));

console.log("Maximum Profit: ", maxProfitOptimal(prices2));

console.log(`Time Complexity: O(N)
Space Complexity: O(1)`);
