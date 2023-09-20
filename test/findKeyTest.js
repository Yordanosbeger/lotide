const assert = require('chai').assert;
const findKey = require('../findKey');

// Test case

const data = {
  "blue": { stars: 1 },
  "green": { stars: 2 },
  "yellow": { stars: 3 },
  "red": { stars: 4 }
};

describe('findKey', () => {
  it('should return the key for a given value matching the condition', () => {
    const result = findKey(data, value => value.stars === 3);
    assert.strictEqual(result, 'yellow');
  });
});