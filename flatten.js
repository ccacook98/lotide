const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; //return true if neither of the above return false
};

const assertArraysEqual = function(actual, expected) {
  let arraysEqual = eqArrays(actual, expected);
  if (arraysEqual) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let output = [];
  for(let x = 0; x < array.length; x++) {
    if(Array.isArray(array[x])) {
      for(let y = 0; y < array[x].length; y++) {
	output.push(array[x][y]);
      }
    } else {
      output.push(array[x]);
    }
  }
  return output;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

	
