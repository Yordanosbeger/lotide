const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// Test case

describe('findKeyByValue', () => {
  const bestTVShowsByGenre = {
    // eslint-disable-next-line camelcase
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return the key for a given value in the object', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined for a value not present in the object', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});