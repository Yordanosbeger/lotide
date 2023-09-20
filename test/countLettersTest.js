const assert = require('chai').assert;
const countLetters = require('../countLetters');

// Test case

describe('#countLetters', () => {
  it('should count the letters correctly in a sentence', () => {
    const sentence = 'Hello, World!';
    const expected = {
      H: 1,
      e: 1,
      l: 3,
      o: 2,
      ',': 1,
      W: 1,
      r: 1,
      d: 1,
      '!': 1
    };
    assert.deepEqual(countLetters(sentence), expected);
  });

  it('should handle an empty sentence', () => {
    const sentence = '';
    const expected = {};
    assert.deepEqual(countLetters(sentence), expected);
  });

  it('should handle a sentence with only spaces', () => {
    const sentence = '     ';
    const expected = {};
    assert.deepEqual(countLetters(sentence), expected);
  });
});