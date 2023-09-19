
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

// Test cases
console.log(middle([1])); // Should output: []
console.log(middle([1, 2])); // Should output: []
console.log(middle([1, 2, 3,4])); // Should output: [2]
console.log(middle([1, 2, 3, 4, 5])); // Should output: [3]

module.exports = middle;

