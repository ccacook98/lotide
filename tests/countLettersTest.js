const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const output = countLetters("lighthouse in the house");
const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const keys = Object.keys(output);

for (const key of keys) {
  assertEqual(output[key], expected[key]);
}
