const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
 const words1 = ["hello", "world", "lighthouse"];
 const wordsToRemove1 = ["lighthouse"];
 const result1 = without(words1, wordsToRemove1);
 assertArraysEqual(result1, ["hello", "world"]); // Should pass
 
module.exports = without;
