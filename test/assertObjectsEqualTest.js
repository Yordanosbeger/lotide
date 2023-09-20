const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

// Test case

describe('#assertObjectsEqual', () => {
  it('should pass when the objects are equal', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
});