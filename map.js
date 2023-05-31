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

const map = function(array, callback) {
  /*Here we're going to stray from the recommended solution a little bit. The
   *instructions recommend creating an empty array and using array.push() to
   *add each result to it. However, it's much quicker to create an array with
   *the required number of elements already in it and simply write each result
   *to its corresponding index in the return array.*/
  const results = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    results[i] = callback(array[i]);
  }
  return results;
}

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);




