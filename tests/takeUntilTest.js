const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

//should return each element before the -1
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);

//should return each element before the comma (",")
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
