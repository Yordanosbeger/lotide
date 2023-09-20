const assert = require('chai').assert;
const countOnly = require('../countOnly');

// Test case

describe('#countOnly', () => {
  it('should count the specified items correctly', () => {
    const firstNames = ["Jason", "Karima", "Fang", "Agouhanna", "Fang"];
    const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = countOnly(firstNames, itemsToCount);
    assert.strictEqual(result["Jason"], 1);
    assert.strictEqual(result["Karima"], 1);
    assert.strictEqual(result["Fang"], 2);
    assert.strictEqual(result["Agouhanna"], undefined);
    //assert.deepEqual(result, { "Jason": 1, "Fang": 2 });
  });
});