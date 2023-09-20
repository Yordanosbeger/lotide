const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

// test case

describe('#assertArraysEqual', () => {
  it('should pass when the arrays are equal', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.deepEqual(assertArraysEqual(array1, array2), undefined);

    const array3 = ["Hello", "Lighthouse", "Labs"];
    const array4 = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(assertArraysEqual(array3, array4), undefined);
  });

  it('should throw an error when the arrays are not equal', () => {
    const array5 = [1, 2, 3];
    const array6 = [3, 2, 1];
    assert.throw(() => assertArraysEqual(array5, array6), Error);
  });
});