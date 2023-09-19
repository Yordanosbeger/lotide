const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// Example usage:
const obj1 = { a: [1, 2, 3], b: "hello" };
const obj2 = { a: [1, 2, 3], b: "hello" };
console.log(eqObjects(obj1, obj2)); 
module.exports = eqObjects;


