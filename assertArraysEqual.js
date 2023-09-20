
const eqArrays = require('./eqArrays');

// assertArraysEqual function implementation

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    throw new Error(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


 module.exports = assertArraysEqual;

