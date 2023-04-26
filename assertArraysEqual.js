const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true; //return true if neither of the above return false
};

const assertArraysEqual = function(actual, expected) {
  var arraysEqual = eqArrays(actual, expected);
  if (arraysEqual) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should FAIL
