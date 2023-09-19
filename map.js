
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

// Test cases for map function

const words = ["ground", "control", "to", "major", "tom"];

// Example 1: Uppercase all letters in words
const uppercaseWords = map(words, word => word.toUpperCase());
assertArraysEqual(uppercaseWords, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Example 2: Calculate the length of each word
const wordLengths = map(words, word => word.length);
assertArraysEqual(wordLengths, [6, 7, 2, 5, 3]);

// Example 3: Add "!" to the end of each word
const excitedWords = map(words, word => word + "!");
assertArraysEqual(excitedWords, ["ground!", "control!", "to!", "major!", "tom!"]);

module.exports = map;