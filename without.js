const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
const nums = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry", "date"];

const result1 = without(words, ["lighthouse"]);
assertArraysEqual(result1, ["hello", "world"]);

const result2 = without(nums, [2, 4]);
assertArraysEqual(result2, [1, 3, 5]);

const result3 = without(fruits, ["banana"]);
assertArraysEqual(result3, ["apple", "cherry", "date"]);

// Ensure the original arrays are not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(nums, [1, 2, 3, 4, 5]);
assertArraysEqual(fruits, ["apple", "banana", "cherry", "date"]);
