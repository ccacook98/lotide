const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(lettersToCount) {
  const results = {};

  for (const character of lettersToCount) {
    if (character !== ' ') {
      if (results[character]) {
	results[character]++;
      } else {
	results[character] = 1;
      }
    }
  }
  return results; 
};

console.log(countLetters("lighthouse in the house"));
