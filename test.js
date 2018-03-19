const assert = require('assert');
Object.freeze(assert);
const fibonacci = require('./src/fibonacci.js');
const bubbleSort = require('./src/bubbleSort.js');
const mergeSort = require('./src/mergeSort.js');

it('bubbleSort', () => {
  assert.equal(bubbleSort([9, 5, 3, 1, 2, 0, 6, 4, 7, 8]).toString(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
});

it('mergeSort', () => {
  assert.equal(mergeSort([9, 5, 3, 1, 2, 0, 6, 4, 7, 8]).toString(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
});
