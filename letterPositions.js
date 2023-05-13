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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //only count non-spaces
    if (sentence[i] !== ' ') {
      //check if there's already something there
      if (results[sentence[i]]) {
	//if so, add our current index to that array
        results[sentence[i]].push(i);
      } else {
	//if not, create a new array in the relevant key containing the index
	//where we first found that character
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
