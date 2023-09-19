const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
  
const flatten = function(arr) {
  const result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        result.push(nestedElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};
module.exports = flatten;







