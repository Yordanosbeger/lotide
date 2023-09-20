
const assert = require('chai').assert;
const map = require('../map');

// Test case

describe('map', () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = map(numbers, (num) => num * 2);

  it('should correctly map the numbers array', () => {
    assert.deepEqual(doubleNumbers, [2, 4, 6, 8, 10]);
  });

  const names = ['Alice', 'Bob', 'Charlie'];
  const nameLengths = map(names, (name) => name.length);

  it('should correctly map the names array', () => {
    assert.deepEqual(nameLengths, [5, 3, 7]);
  });

  const words = ['hello', 'world', 'javascript'];
  const uppercasedWords = map(words, (word) => word.toUpperCase());

  it('should correctly map the words array', () => {
    assert.deepEqual(uppercasedWords, ['HELLO', 'WORLD', 'JAVASCRIPT']);
  });

});