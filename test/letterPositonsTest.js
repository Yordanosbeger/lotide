const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// Test case

describe('letterPositions', () => {
  const result = letterPositions("hello");

  it('should return the correct positions for letter "h"', () => {
    assert.deepEqual(result['h'], [0]);
  });

  it('should return the correct positions for letter "e"', () => {
    assert.deepEqual(result['e'], [1]);
  });

  it('should return the correct positions for letter "l"', () => {
    assert.deepEqual(result['l'], [2, 3]);
  });

  it('should return the correct positions for letter "o"', () => {
    assert.deepEqual(result['o'], [4]);
  });
});