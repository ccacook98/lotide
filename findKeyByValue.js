const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  //only occurs if no match is found
  return undefined;
};

module.exports = findKeyByValue;
