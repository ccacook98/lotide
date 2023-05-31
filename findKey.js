const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, func) {
  let output;
  for (const key of obj) {
    if (func(key)) {
      output = key;
    }
  }
  return output;
}
