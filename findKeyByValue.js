const assertEqual = require('./assertEqual');

// findKeyByValue function implementation

const findKeyByValue = function(object, value) {
  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key) && object[key] === value) {
      return key;
    }
  }
  return undefined;
};

//module.exports = findKeyByValue;
