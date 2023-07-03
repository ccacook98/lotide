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

module.exports = countLetters;

