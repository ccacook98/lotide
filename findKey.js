/*Accepts an object and a callback function and executes the callback on each key
 *in the object until the callback returns true, then returns the first key that
 *matched*/
const findKey = function(obj, func) {
  let output;
  for (const key in obj) {
    if (func(obj[key])) {
      output = key;
      break;
    }
  }
  return output;
};

module.exports = findKey;
