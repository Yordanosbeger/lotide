const assertEqual = require('./assertEqual');
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 
const singleElementArray = ["Hello"];
const resultSingle = tail(singleElementArray);
assertEqual(resultSingle.length, 0); 
const emptyArray = [];
const resultEmpty = tail(emptyArray);
assertEqual(resultEmpty.length, 0); 
module.exports = tail;