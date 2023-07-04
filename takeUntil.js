/*This function accepts an array and a callback function and returns an array
 *containing each element in the input array until an element is encountered
 *for which the callback function returns false.*/
const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = takeUntil;
