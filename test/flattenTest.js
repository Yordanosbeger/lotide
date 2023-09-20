const assert = require('chai').assert;
const flatten = require('../flatten');

// Test case

describe('flatten', () => {
  it('should flatten the nested array into a single-level array', () => {
    const test = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(test, [1, 2, 3, 4, 5, 6]);
  });
});