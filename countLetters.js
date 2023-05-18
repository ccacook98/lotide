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

const output = countLetters("lighthouse in the house");
const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const keys = Object.keys(output);

for (const key of keys) {
  assertEqual(output[key], expected[key]);
}

