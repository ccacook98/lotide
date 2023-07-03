const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //only count non-spaces
    if (sentence[i] !== ' ') {
      //check if there's already something there
      if (results[sentence[i]]) {
        //if so, add our current index to that array
        results[sentence[i]].push(i);
      } else {
        //if not, create a new array in the relevant key containing the index
        //where we first found that character
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
