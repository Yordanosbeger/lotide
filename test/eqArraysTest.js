const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// Test case

describe('#eqArrays', () => {
  it('should return true for equal arrays', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('should return false for unequal arrays', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});