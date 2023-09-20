const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');





const map = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};



module.exports = map;