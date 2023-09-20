const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// Test case

describe('#assertEqual', () => {
  it('should pass when the values are equal', () => {
    assert.strictEqual("lighthouse", "lighthouse");
    assert.strictEqual(1, 1);
  });

  it('should throw an error when the values are not equal', () => {
    assert.throw(() => assert.strictEqual("lighthouse", "Bootcamp"));
    assert.throw(() => assert.strictEqual(1, 2));
  });
});