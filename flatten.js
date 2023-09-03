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

// Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // This will fail
assertEqual(1, 1); // This will pass


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should pass
assertEqual(eqArrays([], []), true); // should pass
assertEqual(eqArrays([1], []), false); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // should pass
