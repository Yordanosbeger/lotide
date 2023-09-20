const assert = require('chai').assert;
const without = require('../without');

// Test case

describe('without', () => {
  const words = ["hello", "world", "lighthouse"];

  it('should remove one element from the array', () => {
    const test1 = without([1, 2, 3], [1]);
    assert.deepEqual(test1, [2, 3]);
  });

  it('should remove multiple elements from the array', () => {
    const test2 = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(test2, ["1", "2"]);
  });

  it('should not modify the original array', () => {
    const copyOfWords = [...words];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, copyOfWords);
  });

});