const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let arraysEqual = eqArrays(actual, expected);
  if (arraysEqual) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
