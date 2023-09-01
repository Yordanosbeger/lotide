
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};
const assertEqual = function(actual, expected) {
  // Convert arrays to strings and then compare
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);

  if (actualStr === expectedStr) {
    console.log(`✅ Assertion Passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`❌ Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
