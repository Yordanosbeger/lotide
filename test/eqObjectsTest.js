const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// Test case

describe('eqObjects', () => {
  it('should return true when the objects are equal', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it('should return false when the objects are not equal', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});