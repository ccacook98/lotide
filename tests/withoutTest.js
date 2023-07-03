const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

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
