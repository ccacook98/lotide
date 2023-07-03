const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

//flatten() should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]].
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
