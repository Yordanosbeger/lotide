const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass, the first element is 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass, the first element is "Hello"
assertEqual(head([]), undefined); // Should pass, the array is empty, so it should return undefined
assertEqual(head([42]), 42); // Should pass, there's only one element, so it should return 42
