const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
