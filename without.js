//Note that I prefer using a more C-like syntax to declare functions.
function without(arr1, arr2) {
  var output = [];
  for(var i = 0; i < arr1.length; i++) {
    if(!arr2.includes(arr1[i])) { //if arr1 element at index is not contained by arr2
      output.push(arr1[i]);
    }
  }
  return output;
}

function eqArrays(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true; //return true if neither of the above return false
}

function assertArraysEqual(actual, expected) {
  var arraysEqual = eqArrays(actual, expected);
  if (arraysEqual) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
}

const words = ["hello", "world", "lighthouse"];

//Remove "hello" and "world", leaving only "lighthouse"
assertArraysEqual(without(words, ["hello", "world"]), ["lighthouse"]);

//Remove only "lighthouse" from the array
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

//Remove all three words from the array
assertArraysEqual(without(words, ["lighthouse", "hello", "world"]), []);

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//I hope these tests are adequate.