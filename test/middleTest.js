  const middle = require('../middle');
  const assert = require('chai').assert;
  
  
  describe("#middle", () => {
  //it("returns 2 for [1, 2, 3]", () => {
   // assert.deepEqual(middle([1,2,3]),[2])
  //});

 // it("returns ['6','7'] for ['5','6','7','8']", () => {
   // assert.deepEqual(middle(['5','6','7','8']), ['6','7']); 
  //});
  describe('middle', () => {
    it('returns an empty array for an array with less than 3 elements', () => {
      assert.deepEqual(middle([1]), []);
      assert.deepEqual(middle([1, 2]), []);
    });
  
    it('returns the middle element for an array with odd number of elements', () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
      assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
    });
  
    it('returns the two middle elements for an array with even number of elements', () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
    });
  });
});