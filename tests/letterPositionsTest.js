const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

/*letterPositions() should return "e" when asked for the letter at index 1 in
 *the string "hello".*/

assertArraysEqual(letterPositions("hello").e, [1]);
